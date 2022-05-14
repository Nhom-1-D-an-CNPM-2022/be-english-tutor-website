import { BookingDao } from "../../infrac/repository/booking/booking.dao";
import {Schedule} from "../schedule/schedule.entity";
import BookSchedule from "../schedule/dto/bookSchedule.dto";

export class Booking {
    constructor(id, tutee, schedule, tuteeRequest, tutorResponse, status) {
        this.id = id; 
        this.tutee = tutee;
        this.schedule = schedule;
        this.tuteeRequest = tuteeRequest;
        this.tutorResponse = tutorResponse;
        this.status = status;
    }

    getTutee = async () => {
        // this.tutee = 
    }

    getSchedule = async () => {
        // this.tutor = 
        const data = await Schedule.getScheduleById(this.schedule.toString());
        this.schedule = data;
    }

    static mappingFromBookingRepository = async (bookingRepo) => {
        const booking = new Booking(
            bookingRepo._id, 
            bookingRepo.tutee, 
            bookingRepo.schedule, 
            bookingRepo.tuteeRequest,
            bookingRepo.tutorResponse,
            bookingRepo.status);

        await booking.getTutee();
        await booking.getSchedule();
        return booking;
    }

    
    static getBookingById =  async(_id) => {
        try {
            const bookingCollection = await new BookingDao().findById(_id);
            const booking = Booking.mappingFromBookingRepository(bookingCollection);
            return booking;
        }
        catch(err) {
            // Error handling logic should go here
            throw new Error(`Get failed: ${err.message}`);
        }
    }

    //******************//
    //Tuteee
    static bookLesson = async(bookLesson) => {
        try {
            //Save booking
            const booking = await new BookingDao().save(bookLesson);

            //Set isBooked true in schedule
            const bookSchedule = new BookSchedule(bookLesson.schedule, true);
            Schedule.toggleBookedStatus(bookSchedule);

            //Get booking 
            return Booking.getBookingById(booking._id);
        }
        catch(err) {
            // Error handling logic should go here
            throw new Error(`Book lesson failed: ${err.message}`);
        }
    }

    static cancelLesson = async(cancelLesson) => {
        try {
            //Get bookedLesson
            const bookedLesson = await Booking.getBookingById(cancelLesson._id);

            if(bookedLesson == null || bookedLesson.tutee._id != cancelLesson.tutee) {
                throw Error("A booked lesson not exist");
            }

            //Delete bookedLesson
            await new BookingDao().deleteBookingById(cancelLesson._id);

            //Set isBooked false in schedule
            const bookSchedule = new BookSchedule(bookedLesson.schedule, false);
            Schedule.toggleBookedStatus(bookSchedule);
        }
        catch(err) {
            // Error handling logic should go here
            throw new Error(`Book lesson failed: ${err.message}`);
        }
    }

    static getBookingByTutee =  async(getBookedLesson) => {
        try {
            const bookingCollections = await new BookingDao().findByCondition(getBookedLesson);

            return bookingCollections.map(booking => Booking.mappingFromBookingRepository(booking));
        }
        catch(err) {
            // Error handling logic should go here
            throw new Error(`Get failed: ${err.message}`);
        }
    }
    //******************//


    //******************//
    //Tutor
    static acceptReservation = async(acceptReservation) => {
        try {
            await new BookingDao().updateBooking(acceptReservation);
            
            return await Booking.getBookingById(acceptReservation._id);
        }
        catch(err) {
            // Error handling logic should go here
            throw new Error(`Accept reservation failed: ${err.message}`);
        }
    }

    static rejectReservation = async(rejectReservation) => {
        try {
            await new BookingDao().updateBooking(rejectReservation);

            return await Booking.getBookingById(acceptReservation._id);
        }
        catch(err) {
            // Error handling logic should go here
            throw new Error(`Reject reservation failed: ${err.message}`);
        }
    }

    // static getBookingByTutor = async(getReservation) => {
    //     try {
    //         const bookingCollections = await new BookingDao().findByCondition(getReservation);

    //         return bookingCollections.map(booking => Booking.mappingFromBookingRepository(booking));
    //     }
    //     catch(err) {
    //         // Error handling logic should go here
    //         throw new Error(`Get failed: ${err.message}`);
    //     }
    // }
}