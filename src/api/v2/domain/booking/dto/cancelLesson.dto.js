export default class CancelLesson {
    constructor(_id, tutee) {
        this.setId(_id);
        this.setTutee(tutee);
    }

    setId(_id) {
        const error = ValidationService.validateId(_id);
        if(error != null) {
            throw new Error(error);
        }
        this._id = _id;
    }

    setTutee(tutee) {
        const error = ValidationService.validateId(tutee);
        if(error != null) {
            throw new Error(error);
        }

        this.tutee = tutee;
    }
}