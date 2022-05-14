import { ScheduleDao } from "../../infrac/repository/schedule/schedule.dao";

export class Schedule {
    constructor(id, tutor, startTime, interval, isBooked) {
        this.id = id; 
        this.tutor = tutor;
        this.startTime = startTime;
        this.interval = interval;
        this.isBooked = isBooked;
    }
    
    getTutor() {
        //Lấy từ Domain tutor
        // this.tutor = 
        this.tutor = {
            name: "A",
            email: "A@gmail.com"
        }
    }

    static mappingFromScheduleRepository = async (scheduleRepo) => {
        const schedule = new Schedule(
            scheduleRepo._id, 
            scheduleRepo.tutor, 
            scheduleRepo.startTime, 
            scheduleRepo.interval,
            scheduleRepo.isBooked);

        schedule.getTutor();
        return schedule;
    }

    static getScheduleById = async (_id) => {
        try {
            const scheduleCollection = await new ScheduleDao().findById(_id);
            const schedule = Schedule.mappingFromScheduleRepository(scheduleCollection);
            return schedule;
        }
        catch(err) {
            // Error handling logic should go here
            throw new Error(`Get failed: ${err.message}`);
        }
    }

    static getScheduleCollections = async (queryCondition) => {
        try {
            const scheduleCollections = await new ScheduleDao().findByCondition(queryCondition);

            return scheduleCollections.map(schedule => Schedule.mappingFromScheduleRepository(schedule));
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