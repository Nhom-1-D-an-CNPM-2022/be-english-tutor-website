import Schedule from "../model";

const setIsBooked = async (_id, isBooked) => {
    await Schedule.updateOne({_id: _id}, {
        isBooked: isBooked,
    });
}

export default setIsBooked;