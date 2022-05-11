import User from "../model";

const getOneAndUpdate = async (
  filter,
  { fullname, password, isVerified, isActive, isDeleted }
) => {
  const foundUser = await User.findOne(filter);

  if (fullname !== undefined) {
    foundUser.fullname = fullname;
  }
  if (password !== undefined) {
    foundUser.password = password;
  }
  if (isVerified !== undefined) {
    foundUser.isVerified = isVerified;
  }
  if (isActive !== undefined) {
    foundUser.isActive = isActive;
  }
  if (isDeleted !== undefined) {
    foundUser.isDeleted = isDeleted;
  }

  foundUser.save();

  return foundUser;
};

export default getOneAndUpdate;
