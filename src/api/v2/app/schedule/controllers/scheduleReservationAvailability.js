import ScheduleService from "../../../domain/schedule/schedule.service";
import CreateSchedule from "../../../domain/schedule/dto/createSchedule.dto";
import TutorService from "../../../domain/tutor/tutor.service";
import GetOneByUserId from "../../../domain/tutor/dto/getOneByUserId.dto";
import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";

const scheduleReservationAvailability = async (req, res) => {
  const { user } = req;
  const { scheduleTime } = req.body;

  try {
    const getOneById = new GetOneByUserId(user._id);

    const tutor = await TutorService.getOne(getOneById);

    for (let item of scheduleTime) {
      let {time, interval} = item;
      await ScheduleService.scheduleReservation(
        new CreateSchedule(tutor._id, time, interval)
      );
    }

    res.status(200).send("Schedule reservation successfully");
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default scheduleReservationAvailability;
