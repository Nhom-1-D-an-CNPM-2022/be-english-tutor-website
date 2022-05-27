import express from "express";
import verifyToken from "../../middlewares/verifyToken";
import userControllers from "./controllers";
const userRoutes = express.Router();

//======================== GET ========================
userRoutes.get("/get-all", userControllers.getUsers);
userRoutes.get("/info", verifyToken, userControllers.getInfo);
userRoutes.get("/get-tutors", userControllers.getTutors);

//======================== POST ========================
userRoutes.post("/register", userControllers.register);
userRoutes.post("/login/google", userControllers.loginGoogle);
userRoutes.post("/login/facebook", userControllers.loginFacebook);
userRoutes.post("/login", userControllers.login);
userRoutes.post("/refresh-token", userControllers.refreshToken);
userRoutes.post("/login-tutor", userControllers.loginTutor);

//======================== PUT ========================
userRoutes.put("/update", userControllers.updateUser);

//======================== DELETE ========================

export default userRoutes;
