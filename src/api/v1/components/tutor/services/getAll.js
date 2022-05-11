import Tutor from '../model';

const getAll = async () => {
  const tutors = await Tutor.find().populate('userId');

  return tutors;
};

export default getAll;
