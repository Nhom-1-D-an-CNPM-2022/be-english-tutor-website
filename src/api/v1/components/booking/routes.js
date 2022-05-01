import express from "express";
import bookingControllers from "./controllers";
const bookingRoutes = express.Router();

//======================== GET ========================
bookingRoutes.get("/list/tutee", bookingControllers.getBookedLesson);
bookingRoutes.get("/list/tutor", bookingControllers.getReservation);

//======================== POST ========================
bookingRoutes.post("/", bookingControllers.bookLesson);
bookingRoutes.post("/sendMailToTuTor", bookingControllers.sendMailToTuTor);

//======================== PUT ========================
bookingRoutes.put("/accept", bookingControllers.acceptReservation);
bookingRoutes.put("/reject", bookingControllers.rejectReservation);

//======================== DELETE ========================
bookingRoutes.delete("/", bookingControllers.cancelLesson);

export default bookingRoutes;
