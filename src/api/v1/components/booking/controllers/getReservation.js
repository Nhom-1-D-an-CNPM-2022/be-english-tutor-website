import BookingService from "../services";
import TutorService from "../../tutor/services";
import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";

const getReservation = async (req, res) => {
    const { user } = req;

    try {
        const tutor= await TutorService.getOneByUserId(user._id);
        if(tutor == null) {
            throw new Error("User is inactive as a tutor")
        }

        const reservations = await BookingService.findByTutor(tutor._id);

        res.status(200).send(reservations);
    } catch (error) {
        res.status(400).send(parseErrorIntoMessage(error));
    }
};

export default getReservation;