import {Booking} from "../../../domain/booking/booking.entity";
import { RejectReservation } from "../../../domain/booking/dto/rejectReservation.dto";
import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";

const rejectReservation = async (req, res) => {
    const { bookingId, tutorResponse } = req.body;

    try {
        const reservation = await Booking.acceptReservation(
            new RejectReservation(bookingId, tutorResponse));

        res.status(200).send(reservation);
    } catch (error) {
        res.status(400).send(parseErrorIntoMessage(error));
    }
};

export default rejectReservation;