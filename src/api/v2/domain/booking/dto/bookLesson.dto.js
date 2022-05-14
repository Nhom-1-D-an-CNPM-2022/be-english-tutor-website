export class BookLesson {
    constructor(tutee, schedule, tuteeRequest) {
        this.setTutee(tutee);
        this.setSchedule(schedule);
        this.tuteeRequest = tuteeRequest;
    }

    setTutee(tutee) {
        if(tutee === null || tutee ==="") {
            throw new Error("Tutee code is invalid");
        }

        this.tutee = tutee;
    }

    setSchedule(schedule) {
        if(schedule === null || schedule ==="") {
            throw new Error("Schedule code is invalid");
        }

        this.schedule = schedule;
    }
}