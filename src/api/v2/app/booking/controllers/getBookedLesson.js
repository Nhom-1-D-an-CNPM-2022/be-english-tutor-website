import {Booking} from "../../../domain/booking/booking.entity";
import { GetBookedLesson } from "../../../domain/booking/dto/getBookedLesson.dto";
import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";

const getBookedLesson = async (req, res) => {
    const { user } = req;

    try {
        const bookedLessons = await Booking.getBookingByTutee(
            new GetBookedLesson(user._id)
        );

        res.status(200).send(bookedLessons);
    } catch (error) {
        res.status(400).send(parseErrorIntoMessage(error));
    }
};

export default getBookedLesson;