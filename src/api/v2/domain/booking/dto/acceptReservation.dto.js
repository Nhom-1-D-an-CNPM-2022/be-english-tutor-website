export class AcceptReservation {
    constructor(_id, tutorResponse ="") {
        this.setId(_id);
        this.status = "ACCEPTED";
        this.tutorResponse = tutorResponse;
    }

    setId(_id) {
        if(_id === null || _id ==="") {
            throw new Error("Booking id is invalid");
        }

        this._id = _id;
    }
}