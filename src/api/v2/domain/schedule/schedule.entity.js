import TutorService from "../tutor/tutor.service";
import GetOneById from "../tutor/dto/getOneById.dto";

export default class Schedule {
    constructor(id, tutor, startTime, interval, isBooked) {
        this._id = id; 
        this.tutor = tutor;
        this.startTime = startTime;
        this.interval = interval;
        this.isBooked = isBooked;
    }
    
    agreegateTutor = async () => {
        //Lấy từ Domain tutor
        const getOneById = new GetOneById(this.tutor.toString());

        this.tutor = await TutorService.getOne(getOneById);
    }

    static mappingFromScheduleRepository = async (scheduleRepo) => {
        const schedule = new Schedule();

        const keys = Object.keys(tutor);

        keys.forEach(key => {
            schedule[key] = scheduleRepo.key;
        })

        await schedule.agreegateTutor();
        return schedule;
    }
    
}