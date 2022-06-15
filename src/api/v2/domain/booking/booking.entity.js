import UserService from "../user/user.service";
import GetOneById from "../user/dto/getOneById.dto";
import ScheduleService from "../schedule/schedule.service";

export default class Booking {
    constructor(id, tutee, schedule, tuteeRequest, tutorResponse, status) {
        this.id = id; 
        this.tutee = tutee;
        this.schedule = schedule;
        this.tuteeRequest = tuteeRequest;
        this.tutorResponse = tutorResponse;
        this.status = status;
    }

    agreegateTutee = async () => {
        const getOneById = new GetOneById(this.tutee.toString());
        this.tutee = await UserService.getOne(getOneById);
    }

    agreegateSchedule = async () => {
        const data = await ScheduleService.getScheduleById(this.schedule.toString());
        this.schedule = data;
    }

    static mappingFromBookingRepository = async (bookingRepo) => {
        const booking = new Booking();
        
        const keys = Object.keys(tutor);

        keys.forEach(key => {
            booking[key] = bookingRepo.key;
        })

        await booking.agreegateTutee();
        await booking.agreegateSchedule();
        return booking;
    }

   
}