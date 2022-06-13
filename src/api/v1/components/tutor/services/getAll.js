import Tutor from "../model";

const getAll = async (number = 0, page = 0, filter = {}) => {
  const tutors = await Tutor.find(filter)
    .limit(number)
    .skip(page)
    .populate("userId");

  return tutors;
};

export default getAll;
