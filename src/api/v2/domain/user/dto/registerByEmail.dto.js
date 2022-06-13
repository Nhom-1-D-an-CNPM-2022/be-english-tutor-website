export default class RegisterByEmail {
    constructor( email, password, fullname, type = "student") {
        this.email = email;
        this.password = password;
        this.fullname = fullname;
        this.type = type;
    }
}