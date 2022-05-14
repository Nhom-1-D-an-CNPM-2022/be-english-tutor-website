import { Schedule } from "../../../domain/schedule/schedule.entity";
import { CreateSchedule } from "../../../domain/schedule/dto/createSchedule.dto";
import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";

const scheduleReservationAvailability = async (req, res) => {
  const { user } = req;
  //tutorId for test (Instead using user._id)
  const { tutorId, scheduleTime } = req.body;

  try {
    for (let item of scheduleTime) {
      let {time, interval} = item;
      await Schedule.scheduleReservation(
        new CreateSchedule(tutorId, time, interval)
      );
    }

    res.status(200).send("Schedule reservation successfully");
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default scheduleReservationAvailability;
