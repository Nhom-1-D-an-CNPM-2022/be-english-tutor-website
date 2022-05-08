import Notification from "../model";

const newNotification = (req, res) => {
    const { from, to, notification } = req.body;
    try {
        const notice = new Notification({
          notification,
          from,
          to,
        });
        const savedNotification = await notice.save();
        res.status(201).send(savedNotification);
      } catch (error) {
        res.status(400).send(parseErrorIntoMessage(error));
      }
};

export default newNotification;
