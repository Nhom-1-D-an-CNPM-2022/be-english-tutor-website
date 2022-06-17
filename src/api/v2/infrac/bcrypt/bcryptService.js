import bcrypt from "bcrypt";

export default class BcryptService {
    SALT_ROUNDS = 10;

    static comparePassword = async(password1, password2) => {
        return await bcrypt.compare(password1, password2);
    }

    static hashPassword = async(password) => {
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
        return hashedPassword;
    }
}