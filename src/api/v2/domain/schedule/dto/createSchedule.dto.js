
export default class CreateSchedule {
    constructor(tutor, startTime, interval) {
        this.setTutor(tutor);
        this.startTime = startTime;
        this.interval = interval;
    }

    setTutor = (tutorId) => {
        const error = ValidationService.validateId(tutorId);
        if(error != null) {
            throw new Error(error);
        }

        this.tutor = tutorId;
    }
}