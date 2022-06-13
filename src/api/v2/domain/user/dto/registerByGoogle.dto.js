export default class RegisterByGoogle {
    constructor(email, password, fullname, googleId) {
        this.email = email;
        this.password = password;
        this.fullname = fullname;
        this.googleId = googleId;
        this.isVerified = true;
    }
}