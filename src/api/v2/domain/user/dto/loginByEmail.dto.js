import ValidationService
 from "../../../infrac/joi-validate/ValidationService";
 
export default class LoginByEmail {
    constructor( email, password, type = "student") {
        this.setEmail(email);
        this.setPassword(password);
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