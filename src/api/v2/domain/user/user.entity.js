
export default class User {
    constructor(id, email, fullname, isVerified, isActive, isDeleted, type, minutesPerDay, daysPerWeek, expiredTime) {
        this._id = id;
        this.email = email;
        this.fullname = fullname;
        this.isVerified = isVerified; 
        this.isActive = isActive;
        this.isDeleted = isDeleted;
        this.type = type;
        this.minutesPerDay = minutesPerDay;
        this.daysPerWeek = daysPerWeek;
        this.expiredTime = expiredTime;
        this.createdAt = undefined;
    }

    static mappingFromUserRepository = (userRepo) => {
        const user = new User();

        const keys = Object.keys(user);

        keys.forEach(key => {
            user[key] = userRepo.key;
        })

        return user;
    }
}