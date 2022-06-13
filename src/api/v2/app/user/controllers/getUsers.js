import UserService from "../../../domain/user/user.service";
import GetUsersByCondition from "../../../domain/user/dto/getUsersByCondition.dto";

const getUsers = async (req, res) => {
  try {
    const query = req.query;
    const number = Number(query.number);
    const page = Number(query.page);

    const getUsersByCondition = new GetUsersByCondition(number, page);
    const users = await UserService.getUsers(getUsersByCondition);

    return res.status(200).send(users);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default getUsers;
