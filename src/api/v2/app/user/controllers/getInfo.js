import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";
import UserService  from "../../../domain/user/user.service";
import GetOneById from "../../../domain/user/dto/getOneById.dto";

const getInfo = async (req, res) => {
  const { user } = req;

  try {
    const getOneById = new GetOneById(user._id);
    const foundUser = await UserService.getOne(getOneById);

    res.status(200).send({
      user: foundUser,
    });
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default getInfo;
