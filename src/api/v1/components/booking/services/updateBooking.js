import Booking from "../model";

const updateBooking = async (bookingId, updateObject) => {
    await Booking.updateOne({_id: bookingId}, updateObject);

    const data = await Booking.findOne({_id: bookingId})
        .populate("tutee", "-password -createdAt -updatedAt")
        .populate({
            path: "schedule",
            populate: {
                path: "tutor",
                select: '-userId',
            }
        });

    return data;
}

export default updateBooking;