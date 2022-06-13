import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import userServices from "../services";

const updateUser = async (req, res) => {
  try {
    const { _id, dataUpdate } = req.body;
    const { fullname, password, isVerified, isActive, isDeleted } = dataUpdate;

    const updatedUser = await userServices.getOneAndUpdate(
      { _id },
      {
        fullname,
        password,
        isVerified,
        isActive,
        isDeleted,
      }
    );

    if (updatedUser.message) {
      res.status(400).send(parseErrorIntoMessage(error));
    }

    res.status(200).send(updatedUser);
  } catch (error) {
    console.log(parseErrorIntoMessage(error));
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default updateUser;
