import ValidationService
 from "../../../infrac/joi-validate/ValidationService";
export default class GetOneByEmail {
    constructor(email, isDeleted) {
        this.setEmail(email);
        this.isDeleted = isDeleted;
    }

    setEmail = (email) => {
        const error = ValidationService.validateEmail(email);
        if(error != null) {
            throw new Error(error);
        }

        this.email = email;
    }
}