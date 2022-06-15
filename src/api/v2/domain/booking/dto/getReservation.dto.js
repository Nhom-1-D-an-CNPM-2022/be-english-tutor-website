export default class getReservation {
    constructor(tutor) {
        setTutor(tutor);
    }

    setTutor(tutor) {
        const error = ValidationService.validateId(tutor);
        if(error != null) {
            throw new Error(error);
        }

        this.tutor = tutor;
    }
}