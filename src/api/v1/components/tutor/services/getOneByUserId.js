import Tutor from '../model';

const getOneByUserId = async (userId) => {
  const tutor = await Tutor.findOne({
    userId,
  });

  return tutor;
};

export default getOneByUserId;
