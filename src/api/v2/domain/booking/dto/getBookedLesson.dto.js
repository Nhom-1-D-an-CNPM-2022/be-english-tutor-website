export default class GetBookedLesson {
    constructor(tutee) {
        this.setTutee(tutee);
    }

    setTutee(tutee) {
        const error = ValidationService.validateId(tutee);
        if(error != null) {
            throw new Error(error);
        }
        
        this.tutee = tutee;
    }
}