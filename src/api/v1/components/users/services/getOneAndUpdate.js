import User from '../model';

const getOneAndUpdate = async (
  filter,
  { fullname, password, isVerified, isActive, isDeleted }
) => {
  const foundUser = await User.findOne(filter);

  if (fullname !== '') {
    foundUser.fullname = fullname;
  }
  if (password !== '') {
    foundUser.password = password;
  }
  if (isVerified !== '') {
    foundUser.isVerified = isVerified;
  }
  if (isActive !== '') {
    foundUser.isActive = isActive;
  }
  if (isDeleted !== '') {
    foundUser.isDeleted = isDeleted;
  }

  foundUser.save();

  return foundUser;
};

export default getOneAndUpdate;
