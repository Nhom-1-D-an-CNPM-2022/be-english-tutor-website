import mongoose from "mongoose";

const tutorSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  displayName: String,
  hometown: String,
  dateOfBirth: Date,
  videoIntroduction: String,
  introduction: String,
  teachingStyles: String,
  aboutMe: String,
  languages: Array,
  experience: Array,
  education: Array,
  imageCertificates: String,
  profession: String,
  interests: String,
});

export default mongoose.model("Tutor", tutorSchema);
