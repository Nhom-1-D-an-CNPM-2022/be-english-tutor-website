import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import Schedule from "../model";
import TutorService from "../../tutor/services";

const scheduleReservationAvailability = async (req, res) => {
  const { user } = req;
  const { scheduleTime } = req.body;

  try {
    const tutor= await TutorService.getOneByUserId(user._id);
    if(tutor == null) {
        throw new Error("User is inactive as a tutor")
    }
        
    for (let item of scheduleTime) {
      await new Schedule({
        tutor: tutor._id,
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
