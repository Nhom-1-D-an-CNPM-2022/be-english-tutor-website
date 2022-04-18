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
    studentRequest: {
      type: String,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
