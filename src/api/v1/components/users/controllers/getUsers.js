import User from "../model";

const getUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ message: err });
    }
    return res.status(200).send(users);
  });
};

export default getUsers;
