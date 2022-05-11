import Notification from "../model";
import mongoose from 'mongoose';


const newNotification = async (req, res) => {
    const { from, to, notification } = req.body;
    try {
        const notice = new Notification({
          notification,
          from: mongoose.Types.ObjectId(from._id),
          to: mongoose.Types.ObjectId(to._id),
        });
        const savedNotification = await notice.save();
        res.status(201).send(savedNotification);
      } catch (error) {
        res.status(400).send(error);
      }
};

export default newNotification;
