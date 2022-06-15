
export default class GetScheduleByTutor {
    constructor(tutor, startTime) {
        this.setTutor(tutor);
        this.startTime = startTime;
    }

    setTutor = (tutorId) => {
        const error = ValidationService.validateId(tutorId);
        if(error != null) {
            throw new Error(error);
        }

        this.tutor = tutorId;
    }
}