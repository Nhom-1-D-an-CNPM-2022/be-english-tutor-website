import express from "express";
import tutorController from "./controllers";

const tutorRoutes = express.Router();

//======================== GET ========================
tutorController.get("/", tutorController.getListTutors);
//======================== POST ========================
//======================== PUT ========================
//======================== DELETE ========================

export default tutorRoutes;
