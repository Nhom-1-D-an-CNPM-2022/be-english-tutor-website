import User from "./user.do";

export default class UserDao {
    save = async(data) => {
        const user = new User(data);
        await user.save();
        return user;
    }

    findById = async(id) => {
        return await User.findOne({_id: id});
    }

    findOne = async(filter) => {
        const foundUser = await User.findOne(filter);
        return foundUser;
    }

    queryByCondition = async(number = 0, page = 0, filter = {}) => {
        const listUsers = await User.find(filter).limit(number).skip(page);

        return listUsers;
    }

    getOneAndUpdate = async(filter, update) => {
        const updatedUser = await User.findOneAndUpdate(filter, update);

        return updatedUser;
    }
}