import jwt from "jsonwebtoken";

const verifyTokenAdmin = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (token !== undefined) {
    jwt.verify(token, process.env.ADMIN_JWT_SECRET, (error, user) => {
      if (error) {
        res.status(403).send("Token is not valid");

        return;
      }

      return next();
    });
  } else {
    res.status(401).send("You're not authenticated");
  }
};

export default verifyTokenAdmin;
