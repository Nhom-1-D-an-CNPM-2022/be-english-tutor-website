export default class LoginByEmail {
    constructor( email, password, type = "student") {
        this.email = email;
        this.password = password;
        this.type = type;
    }
}