import User from '../model';

const getOne = async (filter) => {
  const foundUser = await User.findOne(filter);

  if (!foundUser) {
    throw new Error('Không tìm thấy user');
  }

  return foundUser;
};

export default getOne;
