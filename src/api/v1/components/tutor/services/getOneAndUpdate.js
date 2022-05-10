import Tutor from '../model';

const getOneAndUpdate = async (filter, update) => {
  const updatedTutor = await Tutor.findOneAndUpdate(filter, update, {
    new: true,
  });

  return updatedTutor;
};

export default getOneAndUpdate;
