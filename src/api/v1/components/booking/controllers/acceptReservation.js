import BookingService from "../services";
import TutorService from "../../tutor/services";
import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";

const acceptReservation = async (req, res) => {
    const { user } = req;
    const { bookingId, tutorResponse } = req.body;

    try { 
        const tutor = await TutorService.getOneByUserId(user._id);
        if (tutor == null) {
            throw new Error("User is inactive as a tutor")
        }

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