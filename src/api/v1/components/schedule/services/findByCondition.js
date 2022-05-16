import Schedule from "../model";

const findByTutorId = async (condition) => {
    const data = await Schedule.find(condition)
        .populate("tutor", "-userId");;

    return data;
}

export default findByTutorId;