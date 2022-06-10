import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import userServices from "../services";

const getUsers = async (req, res) => {
  try {
    const query = req.query;
    const number = Number(query.number);
    const page = Number(query.page);

    const users = await userServices.getAll(number, page);

    return res.status(200).send(users);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default getUsers;
