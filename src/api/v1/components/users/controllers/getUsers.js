import parseErrorIntoMessage from '../../../helpers/parseErrorIntoMessage';
import userServices from '../services';

const getUsers = async (req, res) => {
  try {
    const users = await userServices.getAll();

    return res.status(200).send(users);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

// const getUsers = (req, res) => {
//   User.find({}, (err, users) => {
//     if (err) {
//       console.log(err);
//       return res.status(400).json({ message: err });
//     }
//     return res.status(200).send(users);
//   });
// };

export default getUsers;
