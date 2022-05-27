import User from "../model";

const getAll = async (number = 0, page = 0, filter = {}) => {
  const allUsers = await User.find(filter).limit(number).skip(page);

  return allUsers;
};

export default getAll;
