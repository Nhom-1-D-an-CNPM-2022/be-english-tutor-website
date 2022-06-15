export default class RegisterByEmail {
    constructor( email, password, fullname, type = "student") {
        this.setEmail(email);
        this.setPassword(password);
        this.fullname = fullname;
        this.type = type;
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