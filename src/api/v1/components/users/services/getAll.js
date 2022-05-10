import User from '../model';

const getAll = async (filter) => {
  const allUsers = await User.find(filter);

  return allUsers;
};

export default getAll;
