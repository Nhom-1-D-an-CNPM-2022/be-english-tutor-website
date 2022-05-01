import Tutor from '../model';

const getOne = async (tutorId) => {
  const tutor = await Tutor.findById(tutorId).populate('userId');

  return tutor;
};

export default getOne;
