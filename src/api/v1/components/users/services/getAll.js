import User from "../model";

const getAll = async (number, page) => {
  const allUsers = await User.find().limit(number).skip(page);

  return allUsers;
};

export default getAll;
