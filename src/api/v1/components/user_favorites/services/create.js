import UserFavorite from '../model';

const create = ({ userId, tutors = [] }) => {
  const newUserFavorite = new UserFavorite({
    userId,
    tutors,
  });
  newUserFavorite.save();

  return newUserFavorite;
};

export default create;
