import User from '../model';

const createNewUser = async ({ ...userInformation }) => {
  const newUser = new User({ ...userInformation });

  await newUser.save();

  return newUser;
};

export default createNewUser;
