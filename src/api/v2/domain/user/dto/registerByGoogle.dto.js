export default class RegisterByGoogle {
    constructor(email, password, fullname, googleId) {
        this.setEmail(email);
        this.setPassword(password);
        this.fullname = fullname;
        this.googleId = googleId;
        this.isVerified = true;
    }

    setEmail = (email) => {
        const error = ValidationService.validateEmail(email);
        if(error != null) {
            throw new Error(error);
        }

        this.email = email;
    }

    setPassword = (password) => {
        const error = ValidationService.validatePassword(password);
        if(error != null) {
            throw new Error(error);
        }

        this.password = password;
    }
}