export class RejectReservation {
    constructor(_id, tutorResponse ="") {
        this.setId(_id);
        this.status = "REJECTED";
        this.tutorResponse = tutorResponse;
    }

    setId(_id) {
        if(_id === null || _id ==="") {
            throw new Error("Booking id is invalid");
        }

        this._id = _id;
    }
}