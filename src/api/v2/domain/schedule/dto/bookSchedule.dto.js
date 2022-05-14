
export default class BookSchedule {
    constructor(id, isBooked) {
        this._id = id;
        this.setBooked(isBooked);
    }

    setBooked(isBooked) {
        if(isBooked !== null) {
            this.isBooked = isBooked;
        }
        else {
            throw new Error("isBooked props is invalid");
        }
    }
}