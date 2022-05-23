import User from "../model";

const getAll = async (number, page, filter = {}) => {
  const allUsers = await User.find(filter).limit(number).skip(page);

  return allUsers;
};

export default getAll;
