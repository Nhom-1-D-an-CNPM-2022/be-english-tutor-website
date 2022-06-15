export default class BookLesson {
    constructor(tutee, schedule, tuteeRequest) {
        this.setTutee(tutee);
        this.setSchedule(schedule);
        this.tuteeRequest = tuteeRequest;
    }

    setTutee(tutee) {
        const error = ValidationService.validateId(tutee);
        if(error != null) {
            throw new Error(error);
        }

        this.tutee = tutee;
    }

    setSchedule(schedule) {
        const error = ValidationService.validateId(schedule);
        if(error != null) {
            throw new Error(error);
        }

        this.schedule = schedule;
    }
}