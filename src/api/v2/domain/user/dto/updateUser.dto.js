export default class UpdateUser {
    constructor(fullname, password, isVerified, isActive, isDeleted,) {
        this.fullname = fullname;
        this.password = password;
        this.isVerified = isVerified;
        this.isActive = isActive;
        this.isDeleted = isDeleted;
    }
}