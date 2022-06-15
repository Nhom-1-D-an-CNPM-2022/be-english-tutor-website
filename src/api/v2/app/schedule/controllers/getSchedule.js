import ScheduleService from "../../../domain/schedule/schedule.service";
import GetScheduleByTime from "../../../domain/schedule/dto/getScheduleByTime.dto";
import GetScheduleByTutor from "../../../domain/schedule/dto/getScheduleByTutor.dto";
import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";

const getSchedule = async (req, res) => {
    try {
        //get Condition by tutor or startTime
        const condition = whereCondition(req);

        const listSchedules = await ScheduleService.getSchedules(condition);

        res.status(200).send(listSchedules);
    } catch (error) {
        res.status(400).send(parseErrorIntoMessage(error));
    }
};

const whereCondition = (req) => {
    const {
        tutorId,
        startTime,
    } = req.body;

    let condition = {};

    if(tutorId != null) {
        condition = new GetScheduleByTime(tutorId, {
            "$gte": new Date().toISOString(),
        });
    }
    else {
        condition = new GetScheduleByTutor({
            "$gte": startTime,
            "$lte": startTime,
        });
    }
    return condition;
}

export default getSchedule;