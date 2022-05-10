import User from '../model';

const getOneByEmail = async ({ ...options }) => {
  const userFoundByEmail = await User.findOne({
    email: options.email,
    ...options,
  });

  return userFoundByEmail;
};

export default getOneByEmail;
