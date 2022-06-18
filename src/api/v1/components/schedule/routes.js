import express from "express";
import scheduleControllers from "./controllers";
const scheduleRoutes = express.Router();
import verifyToken from "../../middlewares/verifyToken";
import verifyTokenTutor from "../../middlewares/verifyTokenTutor";

//======================== GET ========================
scheduleRoutes.get("/", scheduleControllers.getSchedule);

//======================== POST ========================
scheduleRoutes.post(
  "/",
  verifyTokenTutor,
  scheduleControllers.scheduleReservationAvailability
);
//======================== PUT ========================
//======================== DELETE ========================

export default scheduleRoutes;
