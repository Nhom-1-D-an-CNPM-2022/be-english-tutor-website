
export default class GetOneById {
    constructor(_id) {
        this.setId(_id);
    }

    setId = (_id) => {
        const error = ValidationService.validateId(_id);
        if(error != null) {
            throw new Error(error);
        }

        this._id = _id;
    }
}