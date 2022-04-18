import BookingService from "../services";
import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";

const getBookedLesson = async (req, res) => {
    const { user } = req;

    try {
        const bookedLessons = await BookingService.findByTutee(user._id);

        res.status(200).send(bookedLessons);
    } catch (error) {
        res.status(400).send(parseErrorIntoMessage(error));
    }
};

export default getBookedLesson;