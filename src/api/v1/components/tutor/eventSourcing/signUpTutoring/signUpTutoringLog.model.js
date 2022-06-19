import mongoose from "mongoose";

const signUpTutoringLogSchema = new mongoose.Schema(
  {
    eventType: {
      type: String,
      enum: ["CREATED", "UPDATED"],
    },
    userId: mongoose.Schema.Types.ObjectId,
    metadata: Object,
  },
  {
    timestamps: true,
  },
);

const SignUpTutoringLog = mongoose.model(
  "SignUpTutoringLog",
  signUpTutoringLogSchema,
);

export default SignUpTutoringLog;
