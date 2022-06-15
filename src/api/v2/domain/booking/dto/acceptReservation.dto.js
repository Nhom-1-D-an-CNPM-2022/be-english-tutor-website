export default class AcceptReservation {
    constructor(_id, tutorResponse ="") {
        this.setId(_id);
        this.status = "ACCEPTED";
        this.tutorResponse = tutorResponse;
    }

    setId = (_id) => {
        const error = ValidationService.validateId(_id);
        if(error != null) {
            throw new Error(error);
        }

        this._id = _id;
    }
}