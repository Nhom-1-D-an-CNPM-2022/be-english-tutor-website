import mongoose from "mongoose";

const tutorProfileWriteModelSchema = new mongoose.Schema(
  {
    aggregateId: String,
    aggregateVersion: Number,
    type: String,
    payload: Object,
    context: Object,
  },
  {
    timestamps: true,
  },
);

const TutorProfileWriteModel = mongoose.model(
  "signUpTutoringEventLog",
  tutorProfileWriteModelSchema,
);

export default TutorProfileWriteModel;
