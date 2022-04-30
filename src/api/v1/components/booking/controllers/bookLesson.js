import Booking from "../model";
import BookingService from "../services";
import ScheduleService from "../../schedule/services";
import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";

const bookLesson = async (req, res) => {
    const {user} = req;
    const { scheduleId, tuteeRequest } = req.body;

    try {
        if(scheduleId == null) {
            throw error("Schedule code is invalid");
        }

        const booking = new Booking({
            tutee: user._id,
            schedule: scheduleId,
            tuteeRequest: tuteeRequest,
        });
        
        await booking.save();
        await ScheduleService.setIsBooked(scheduleId, true);
        
        const data = await BookingService.findById(booking._id);

        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(parseErrorIntoMessage(error));
    }
};

export default bookLesson;