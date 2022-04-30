import Schedule from "../model";
import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";

const getSchedule = async (req, res) => {
    try {
        //get Condition by tutor or startTime
        const condition = whereCondition(req);

        const data = await Schedule.find(condition)
            .populate("tutor", "-userId");

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
        condition = {
            "tutor": tutorId,
            "startTime": {
                "$gte": new Date().toISOString(),
            }
        }
    }
    else {
        condition = {
            "startTime": {
                "$gte": startTime,
                "$lte": startTime,
            }
        }
    }
    return condition;
}

export default getSchedule;