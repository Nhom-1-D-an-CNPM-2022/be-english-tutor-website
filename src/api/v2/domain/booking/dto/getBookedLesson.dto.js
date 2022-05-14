export class GetBookedLesson {
    constructor(tutee) {
        this.setTutee(tutee);
    }

    setTutee(tutee) {
        if(tutee === null || tutee ==="") {
            throw new Error("Tutee code is invalid");
        }

        this.tutee = tutee;
    }
}