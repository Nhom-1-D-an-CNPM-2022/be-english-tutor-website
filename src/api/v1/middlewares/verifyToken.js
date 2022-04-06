import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    const accessToken = authHeader && authHeader.split(' ')[1];

    if(accessToken!==null) {
        jwt.verify(accessToken, process.env.JWT_SECRET, (error, user) => {
            if(error) {
                res.status(403).send("Token is not valid");
            }
            req.user = user.data;
            return next();
        });
    }
    else {
        res.status(401).send("You're not authenticated");
    }
}

export default verifyToken;