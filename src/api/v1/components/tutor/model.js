import mongoose from 'mongoose';

const tutorSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
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
  profession: String,
  certificates: Array,
  profilePicture: String,
  interests: String,
  motivation: String,
  source: String,
  otherPlatforms: Array,
});

const Tutor = mongoose.model("Tutor", tutorSchema);

export default Tutor;
