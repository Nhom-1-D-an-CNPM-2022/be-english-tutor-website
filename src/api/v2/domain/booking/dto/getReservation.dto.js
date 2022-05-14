export class getReservation {
    constructor(tutor) {
        setTutor(tutor);
    }

    setTutor(tutor) {
        if(tutor === null || tutor ==="") {
            throw new Error("Tutor code is invalid");
        }

        this.tutor = tutor;
    }
}