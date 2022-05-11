import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import userServices from "../services";

const updateUser = async (body) => {
  try {
    const { _id, dataUpdate } = body;
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
      return false;
    }

    return true;

    // res.status(200).send(updatedUser);
  } catch (error) {
    // res.status(400).send(parseErrorIntoMessage(error));
    console.log(parseErrorIntoMessage(error));
  }
};

export default updateUser;
