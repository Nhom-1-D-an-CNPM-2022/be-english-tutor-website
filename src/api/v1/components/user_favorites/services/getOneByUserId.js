import UserFavorite from '../model';

const getOneByUserId = async (userId) => {
  const userFavorites = await UserFavorite.findOne({ userId }).populate(
    'tutors'
  );
  return userFavorites;
};

export default getOneByUserId;
