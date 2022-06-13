import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";
import UserService from "../../../domain/user/user.service";
import UpdateUser
 from "../../../domain/user/dto/updateUser.dto";
const updateUser = async (req, res) => {
  try {
    const { _id, dataUpdate } = req.body;
    const { fullname, password, isVerified, isActive, isDeleted } = dataUpdate;

    const updateUser = new UpdateUser();
    const keys = Object.keys(updateUser);

    keys.forEach(key => {
      if(dataUpdate.key == null) {
        delete updateUser[key]; 
      }
      else {
        updateUser[key] = dataUpdate.key;
      }
    })

    const updatedUser = await UserService.getOneByIdAndUpdate(_id, updateUser);

    res.status(200).send(updatedUser);
  } catch (error) {
    console.log(parseErrorIntoMessage(error));
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default updateUser;
