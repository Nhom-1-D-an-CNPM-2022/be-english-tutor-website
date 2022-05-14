import {Booking} from "../../../domain/booking/booking.entity";
import { BookLesson } from "../../../domain/booking/dto/bookLesson.dto";
import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";

const bookLesson = async (req, res) => {
    const {user} = req;
    const { scheduleId, tuteeRequest } = req.body;

    try {
        const data = await Booking.bookLesson(
            new BookLesson(user._id, scheduleId, tuteeRequest)
        );

        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(parseErrorIntoMessage(error));
    }
};

export default bookLesson;