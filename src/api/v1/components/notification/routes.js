import express from "express";
import notificationControllers from "./controllers";
const notificationRoutes = express.Router();

//======================== GET ========================

//======================== POST ========================
notificationRoutes.post("/addNotification", notificationControllers.newNotification);
//======================== PUT ========================
//======================== DELETE ========================

export default notificationRoutes;
