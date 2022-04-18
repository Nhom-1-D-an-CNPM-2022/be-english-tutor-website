import express from "express";
import bookingControllers from "./controllers";
const bookingRoutes = express.Router();

//======================== GET ========================
bookingRoutes.get("/list/student", bookingControllers.getBookedLesson);

//======================== POST ========================
bookingRoutes.post("/", bookingControllers.bookLesson);
//======================== PUT ========================
//======================== DELETE ========================
bookingRoutes.delete("/", bookingControllers.cancelLesson);

export default bookingRoutes;
