import Booking from "./booking.do";

export class BookingDao {
    save = async(data) => {
        const booking = new Booking(data);
        await booking.save();

        return booking;
    }

    findById = async(_id) => {
        return await Booking.findById({_id: _id});
    }

    findByCondition = async(queryCondition) => {
        return await Booking.find(queryCondition);
    }

    updateBooking = async(booking) => {
        await Booking.updateOne({_id: booking._id}, booking);
    }

    deleteBookingById = async(_id) => {
        await Booking.deleteOne({_id: _id});
    }
}