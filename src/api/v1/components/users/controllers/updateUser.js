import User from "../model";

const updateUser = (req, res) => {
  const { _id, dataUpdate } = req.body;
  const { fullname, password, isVerified, isActive, isDeleted } = dataUpdate;

  User.findById(_id, async (err, user) => {
    if (err) {
      return res.status(400).json({ message: err });
    }

    if (fullname !== "") {
      user.fullname = fullname;
    }
    if (password !== "") {
      user.password = password;
    }
    if (isVerified !== "") {
      user.isVerified = isVerified;
    }
    if (isActive !== "") {
      user.isActive = isActive;
    }
    if (isDeleted !== "") {
      user.isDeleted = isDeleted;
    }

    user.save();
    return res.status(200).json(user);
  });
};

export default updateUser;
