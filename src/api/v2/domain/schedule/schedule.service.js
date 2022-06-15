import Schedule from "./schedule.entity";
import ScheduleDao from "../../infrac/repository/schedule/schedule.dao";

export default class ScheduleService {
    
    static getScheduleById = async (_id) => {
        try {
            let schedule = await new ScheduleDao().findById(_id);
            schedule = await Schedule.mappingFromScheduleRepository(schedule);
            return schedule;
        }
        catch(err) {
            // Error handling logic should go here
            throw new Error(`Get failed: ${err.message}`);
        }
    }

    static getSchedules = async (queryCondition) => {
        try {
            const listSchedules = await new ScheduleDao().findByCondition(queryCondition);

            return listSchedules.map(schedule => Schedule.mappingFromScheduleRepository(schedule));
        }
        catch(err) {
            // Error handling logic should go here
            throw new Error(`Get failed: ${err.message}`);
        }
    }

    static scheduleReservation = async (createSchedule) => {
        try {
            await new ScheduleDao().save(createSchedule);
        }
        catch(err) {
            throw new Error("Schedule reservation failed: " + err.message);
        }
    }

    static toggleBookedStatus = async (bookSchedule) => {
        try {
            await new ScheduleDao().setIsBooked(bookSchedule._id, bookSchedule.isBooked);
        }
        catch(err) {
            throw new Error("Schedule reservation failed: " + err.message);
        }
    }

}