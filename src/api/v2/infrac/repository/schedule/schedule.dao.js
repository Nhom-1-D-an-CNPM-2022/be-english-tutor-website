import Schedule from "./schedule.do";

export class ScheduleDao {

    save = async(data) => {
        const schedule = new Schedule(data);
        await schedule.save();
    }

    findById = async(id) => {
        return await Schedule.findOne({_id: id});
    }

    findByCondition = async(condition) => {
        return await Schedule.find(condition);
    }

    setIsBooked = async (_id, isBooked) => {
        await Schedule.updateOne({_id: _id}, {
            isBooked: isBooked,
        });
    }
}