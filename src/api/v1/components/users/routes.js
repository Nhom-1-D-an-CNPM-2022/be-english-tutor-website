import express from "express";
//import userControllers from "./controllers";
import userControllers from "./controllers";
import verifyToken from "../../middlewares/verifyToken";
const userRoutes = express.Router();

//======================== GET ========================
userRoutes.get("/info", verifyToken, userControllers.getInfo);

//======================== POST ========================
userRoutes.post("/register", userControllers.register);
userRoutes.post("/login/google", userControllers.loginGoogle);
userRoutes.post("/login/facebook", userControllers.loginFacebook);
userRoutes.post("/login", userControllers.login);
userRoutes.post("/refresh-token", userControllers.refreshToken);
//======================== PUT ========================
//======================== DELETE ========================

export default userRoutes;
