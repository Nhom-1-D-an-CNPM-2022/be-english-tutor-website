import express from "express";
import scheduleControllers from "./controllers";
const scheduleRoutes = express.Router();

//======================== GET ========================
scheduleRoutes.get("/", scheduleControllers.getSchedule);

//======================== POST ========================
scheduleRoutes.post("/", scheduleControllers.scheduleReservationAvailability);
//======================== PUT ========================
//======================== DELETE ========================

export default scheduleRoutes;
