import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import Schedule from "../model";

const scheduleReservationAvailability = async (req, res) => {
  const { user } = req;
  //tutorId for test (Instead using user._id)
  const { tutorId, scheduleTime } = req.body;

  try {
    for (let item of scheduleTime) {
      await new Schedule({
        tutor: tutorId,
        startTime: item.time,
        interval: item.interval,
      }).save();
    }

    res.status(200).send("Schedule reservation successfully");
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default scheduleReservationAvailability;
