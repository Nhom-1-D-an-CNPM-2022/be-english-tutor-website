import mongoose from "mongoose";

const tutorSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  displayName: String,
  hometown: String,
  dateOfBirth: Date,
  videoIntroduction: Object,
  introduction: String,
  teachingStyles: String,
  aboutMe: String,
  languages: Array,
  experience: Array,
  education: Array,
  profession: String,
  certificates: Array,
  profilePicture: Object,
  interests: String,
  motivation: String,
  source: String,
  otherPlatforms: Object,
  isSubmitted: Boolean,
  isApproved: Boolean,
});

const Tutor = mongoose.model("Tutor", tutorSchema);

export default Tutor;
