import BookingService from "../services";
import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";

const acceptReservation = async (req, res) => {
    const { bookingId, tutorResponse } = req.body;

    try {
        const reservation = await BookingService.updateBooking(bookingId, {
            status: "ACCEPTED",
            tutorResponse: tutorResponse,
        });

        res.status(200).send(reservation);
    } catch (error) {
        res.status(400).send(parseErrorIntoMessage(error));
    }
};

export default acceptReservation;