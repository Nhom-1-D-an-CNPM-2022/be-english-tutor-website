export default class GetOneByUserId {
    constructor(userId) {
        this.setUserId(userId);
    }

    setUserId = (userId) => {
        const error = ValidationService.validateId(userId);
        if(error != null) {
            throw new Error(error);
        }

        this.userId = userId;
    }
}