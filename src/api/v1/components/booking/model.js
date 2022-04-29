import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    tutee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    schedule: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Schedule"
    },
    tuteeRequest: {
      type: String,
      trim: true,
    },
    tutorResponse: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      default: "PENDING",
      enum: ["PENDING", "REJECTED", "ACCEPTED"],
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
