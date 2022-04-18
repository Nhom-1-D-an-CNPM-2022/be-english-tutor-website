import Booking from "../model";

const findById = async (tuteeId) => {
    const data = await Booking.find({ tutee: tuteeId })
        .populate("tutee", "-password -createdAt -updatedAt")
        .populate({
            path: "schedule",
            populate: {
                path: "tutor",
                select: '-userId'
            }
        });

    return data;
}

export default findById;