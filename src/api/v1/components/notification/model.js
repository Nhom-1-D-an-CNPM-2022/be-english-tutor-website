import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema(
  {
    notification: {
      type: String,
    },
    from:{
      type: String,
    },
    to:{
      type: String,
    },
    time: {
        type: Date,
        default: new Date(),
    },
    state: {
        type: Boolean,
        default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Schedule = mongoose.model('Notification', notificationSchema);
export default Schedule;
