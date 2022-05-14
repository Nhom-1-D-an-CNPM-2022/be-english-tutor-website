import {Booking} from "../../../domain/booking/booking.entity";
import { CancelLesson } from "../../../domain/booking/dto/cancelLesson.dto";
import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";

const cancelLesson = async (req, res) => {
    const { user } = req;
    const { bookingId } = req.body;

    try {
        await Booking.cancelLesson(
            new CancelLesson(bookingId, user._id)
        );
        
        res.status(200).send("Cancel lesson successfully");
    } catch (error) {
        res.status(400).send(parseErrorIntoMessage(error));
    }
};

export default cancelLesson;