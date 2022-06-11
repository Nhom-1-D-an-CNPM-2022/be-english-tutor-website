import ScheduleService from "../services";
import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";

const getSchedule = async (req, res) => {
  try {
    //get Condition by tutor or startTime
    const condition = whereCondition(req);

    const data = await ScheduleService.findByCondition(condition);

    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

const whereCondition = (req) => {
  const { tutorId, startTime, interval } = req.query;

  let condition = {};

  if (tutorId != null) {
    condition = {
      tutor: tutorId,
    };
  } else {
    condition = {
      startTime: startTime,
      interval: interval,
      isBooked: false,
    };
  }
  return condition;
};

export default getSchedule;
