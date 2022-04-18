import Booking from "../model";

const findById = async (_id) => {
    const data = await Booking.findOne({_id: _id})
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