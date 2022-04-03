import mongoose from "mongoose";

const tutorSchema = new mongoose.Schema({
  introduce: String,
  education: String,
  experience: String,
  profession: String,
  schedule: Date,
  languages: String,
  teachingStyles: String,
  certificates: String,
});

export default mongoose.model("Tutor", tutorSchema);
