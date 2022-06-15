import mongoose from 'mongoose';

const scheduleSchema = new mongoose.Schema({
    tutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tutor"
    },
    startTime: {
        type: Date,
    },
    interval: {
        type: Number,
        enum : [15, 30],
        default: 30,
    },
    isBooked: {
        type: Boolean,
        default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Schedule = mongoose.model('Schedule', scheduleSchema);
export default Schedule;
