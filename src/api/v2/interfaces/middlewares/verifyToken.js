import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];
  // let token = req.query.jwt || req.body.jwt;

  if (token !== undefined) {
    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
      if (error) {
        res.status(403).send("Token is not valid");

        return;
      }

      req.user = user.data;

      return next();
    });
  } else {
    res.status(401).send("You're not authenticated");
  }
};

export default verifyToken;
