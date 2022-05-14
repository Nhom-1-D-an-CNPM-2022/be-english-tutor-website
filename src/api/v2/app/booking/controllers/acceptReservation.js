import {Booking} from "../../../domain/booking/booking.entity";
import { AcceptReservation } from "../../../domain/booking/dto/acceptReservation.dto";
import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";

const acceptReservation = async (req, res) => {
    const { bookingId, tutorResponse } = req.body;
    try {
        const reservation = await Booking.acceptReservation(
            new AcceptReservation(bookingId, tutorResponse));

        res.status(200).send(reservation);
    } catch (error) {
        res.status(400).send(parseErrorIntoMessage(error));
    }
};

export default acceptReservation;