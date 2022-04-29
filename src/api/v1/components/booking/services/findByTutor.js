import Booking from "../model";

const findByTutor = async (tutorId) => {
    const data = await Booking.find()
        .populate("tutee", "-password -createdAt -updatedAt")
        .populate({
            path: "schedule",
            match: {
                tutor: tutorId,
            },
            populate: {
                path: "tutor",
                select: '-userId',
            }
        });

    return data;
}

export default findByTutor;