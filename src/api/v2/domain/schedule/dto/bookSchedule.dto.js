
export default class BookSchedule {
    constructor(id, isBooked) {
        this.setId(_id);
        this.setBooked(isBooked);
    }

    setId = (_id) => {
        const error = ValidationService.validateId(_id);
        if(error != null) {
            throw new Error(error);
        }

        this._id = _id;
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