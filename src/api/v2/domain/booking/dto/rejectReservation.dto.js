export default class RejectReservation {
    constructor(_id, tutorResponse ="") {
        this.setId(_id);
        this.status = "REJECTED";
        this.tutorResponse = tutorResponse;
    }

    setId(_id) {
        const error = ValidationService.validateId(_id);
        if(error != null) {
            throw new Error(error);
        }

        this._id = _id;
    }
}