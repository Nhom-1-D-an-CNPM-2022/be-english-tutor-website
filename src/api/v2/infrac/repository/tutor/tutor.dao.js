import Tutor from "./tutor.do";

export default class TutorDao {

    save = async(data) => {
        const tutor = new Tutor(data);
        await tutor.save();
        return tutor;
    }

    findById = async(id) => {
        return await Tutor.findOne({_id: id});
    }

    findOne = async(filter) => {
        const foundTutor = await Tutor.findOne(filter);
        return foundTutor;
    }

    queryByCondition = async(number = 0, page = 0, filter = {}) => {
        const listTutors = await Tutor.find(filter).limit(number).skip(page);

        return listTutors;
    }

    getOneAndUpdate = async(filter, update) => {
        const updatedTutor = await Tutor.findOneAndUpdate(filter, update);

        return updatedTutor;
    }
}