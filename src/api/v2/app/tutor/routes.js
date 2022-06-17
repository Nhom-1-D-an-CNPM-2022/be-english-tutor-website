import express from "express";
import verifyToken from "../../interfaces/middlewares/verifyToken";
import tutorController from "./controllers";

const tutorRoutes = express.Router();

//======================== GET ========================
tutorRoutes.get("/", tutorController.getListTutors);
tutorRoutes.get(
  "/get-reviewed-profiles",
  tutorController.getListReviewedProfiles
);
tutorRoutes.get("/search", tutorController.searchAllTutors);
tutorRoutes.get("/profile/me", verifyToken, tutorController.getProfileByUserId);
tutorRoutes.get("/profile/:tutorId", tutorController.getProfile);
//======================== POST ========================
tutorRoutes.post("/", tutorController.createNewTutor);

//======================== PUT ========================
tutorRoutes.put("/approve-profile", tutorController.approveProfile);
tutorRoutes.put("/profile/me", verifyToken, tutorController.updateProfile);
tutorRoutes.put(
  "/profile/media",
  verifyToken,
  tutorController.updateProfileMedia
);
tutorRoutes.put(
  "/profile/certificates",
  verifyToken,
  tutorController.updateCertificates
);
tutorRoutes.put("/review", verifyToken, tutorController.updateReviewTutor);

//======================== DELETE ========================

export default tutorRoutes;
