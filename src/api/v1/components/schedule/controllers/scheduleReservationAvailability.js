import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import Schedule from "../model";
import TutorService from "../../tutor/services";

const scheduleReservationAvailability = async (req, res) => {
  const { user } = req;
  const schedule = req.body.schedule;
  try {
    const tutor = await TutorService.getOneByUserId(user._id);
    if (tutor == null) {
      throw new Error("User is inactive as a tutor");
    }

    await new Schedule({
      tutor: tutor._id,
      startTime: schedule.startTime,
      interval: schedule.interval,
      isBooked: schedule.isBooked,
    }).save();

    res.status(200).send("Schedule reservation successfully");
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default scheduleReservationAvailability;
