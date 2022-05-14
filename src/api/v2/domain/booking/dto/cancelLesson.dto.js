export class CancelLesson {
    constructor(_id, tutee) {
        this.setId(_id);
        this.setTutee(tutee);
    }

    setId(_id) {
        if(_id === null || _id ==="") {
            throw new Error("Booking id is invalid");
        }

        this._id = _id;
    }

    setTutee(tutee) {
        if(tutee === null || tutee ==="") {
            throw new Error("Tutee code is invalid");
        }

        this.tutee = tutee;
    }
}