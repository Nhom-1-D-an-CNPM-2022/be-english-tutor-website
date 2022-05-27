import BookingService from "../services";
import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import {ObjectID} from 'mongodb'

const history = async (req, res) => {

    try {
        //const bookedLessons = await BookingService.findByTutee(ObjectID('62532502b6a069152a365780'));
        const bookedLessons = await BookingService.findByTutee(req.user._id);
        res.status(200).send(bookedLessons);
    } catch (error) {
        res.status(400).send(parseErrorIntoMessage(error));
    }
};

export default history;