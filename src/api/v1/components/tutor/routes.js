import express from "express";
import verifyToken from "../../middlewares/verifyToken";
import verifyTokenAdmin from "../../middlewares/verifyTokenAdmin";
import tutorController from "./controllers";

const tutorRoutes = express.Router();

//======================== GET ========================
tutorRoutes.get("/", tutorController.getListTutors);
tutorRoutes.get(
  "/get-reviewed-profiles",
  verifyTokenAdmin,
  tutorController.getListReviewedProfiles,
);
tutorRoutes.get("/search", tutorController.searchAllTutors);
tutorRoutes.get("/profile/me", verifyToken, tutorController.getProfileByUserId);
tutorRoutes.get("/profile/:tutorId", tutorController.getProfile);
tutorRoutes.get("/get-info", tutorController.getInfoTutor);

//======================== POST ========================
tutorRoutes.post("/", tutorController.createNewTutor);

//======================== PUT ========================
tutorRoutes.put(
  "/profile/approve/:id",
  verifyTokenAdmin,
  tutorController.approveProfile,
);
tutorRoutes.put(
  "/profile/reject/:id",
  verifyTokenAdmin,
  tutorController.rejectProfile,
);
tutorRoutes.put("/profile/me", verifyToken, tutorController.updateProfile);
tutorRoutes.put(
  "/profile/media",
  verifyToken,
  tutorController.updateProfileMedia,
);
tutorRoutes.put(
  "/profile/certificates",
  verifyToken,
  tutorController.updateCertificates,
);
tutorRoutes.put("/review", tutorController.updateReviewTutor);

//======================== DELETE ========================

export default tutorRoutes;
