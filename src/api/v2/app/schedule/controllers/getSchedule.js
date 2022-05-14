import { Schedule } from "../../../domain/schedule/schedule.entity"
import { QueryTimeSchedule } from "../../../domain/schedule/dto/queryTimeSchedule.dto";
import { QueryTutorSchedule } from "../../../domain/schedule/dto/queryTutorSchedule.dto";
import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";

const getSchedule = async (req, res) => {
    try {
        //get Condition by tutor or startTime
        const condition = whereCondition(req);
        console.log(condition);
        const data = await Schedule.getScheduleCollections(condition);

        res.status(200).send(data);
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
        condition = new QueryTutorSchedule(tutorId, {
            "$gte": new Date().toISOString(),
        });
    }
    else {
        condition = new QueryTimeSchedule({
            "$gte": startTime,
            "$lte": startTime,
        });
    }
    return condition;
}

export default getSchedule;