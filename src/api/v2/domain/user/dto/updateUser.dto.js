export default class UpdateUser {
    constructor(fullname, password, isVerified, isActive, isDeleted) {
        this.fullname = fullname;
        this.setPassword(password);
        this.isVerified = isVerified;
        this.isActive = isActive;
        this.isDeleted = isDeleted;
    }

    setPassword = (password) => {
        const error = ValidationService.validatePassword(password);
        if(error != null) {
            throw new Error(error);
        }

        this.password = password;
    }
}