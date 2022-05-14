
import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";

// //nOTE: NOT COMPLETELY IN DOMAIN
const getReservation = async (req, res) => {
    const { user } = req;
    const {tutorId}= req.body; // Using for testing (Alternative by tutorId from user above)

    try {
        // const reservations = await BookingService.findByTutor(tutorId);
        const reservations = {message: "success"};
        res.status(200).send(reservations);
    } catch (error) {
        res.status(400).send(parseErrorIntoMessage(error));
    }
};

export default getReservation;