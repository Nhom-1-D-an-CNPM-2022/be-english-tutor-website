import Booking from "../model";
import BookingService from "../services";
import ScheduleService from "../../schedule/services";
import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";

const cancelLesson = async (req, res) => {
  const { user } = req;
  const { bookingId } = req.query;

  try {
    const bookedLesson = await BookingService.findById(bookingId);

    if (bookedLesson == null || bookedLesson.tutee._id != user._id) {
      throw Error("A booked lesson not exist");
    }

    await Booking.deleteOne({ _id: bookingId });
    await ScheduleService.setIsBooked(bookedLesson.schedule._id, false);

    res.status(200).json({ data: true, message: "Cancel lesson successfully" });
  } catch (error) {
    res
      .status(400)
      .json({ data: false, message: parseErrorIntoMessage(error) });
  }
};

export default cancelLesson;
