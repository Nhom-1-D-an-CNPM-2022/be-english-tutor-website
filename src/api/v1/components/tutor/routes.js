import express from "express";
import tutorController from "./controllers";

const tutorRoutes = express.Router();

//======================== GET ========================
tutorRoutes.get("/", tutorController.getListTutors);
tutorRoutes.get(
  "/get-reviewed-profiles",
  tutorController.getListReviewedProfiles
);
tutorRoutes.get("/search", tutorController.searchAllTutors);
tutorRoutes.get("/profile/me", tutorController.getProfileByUserId);
tutorRoutes.get("/profile/:tutorId", tutorController.getProfile);
tutorRoutes.get("/get-info", tutorController.getInfoTutor);

//======================== POST ========================
tutorRoutes.post("/", tutorController.createNewTutor);

//======================== PUT ========================
tutorRoutes.put("/approve-profile", tutorController.approveProfile);
tutorRoutes.put("/profile/me", tutorController.updateProfile);
tutorRoutes.put("/profile/media", tutorController.updateProfileMedia);
tutorRoutes.put("/profile/certificates", tutorController.updateCertificates);
tutorRoutes.put("/review", tutorController.updateReviewTutor);

//======================== DELETE ========================

export default tutorRoutes;
