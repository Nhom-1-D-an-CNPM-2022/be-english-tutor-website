import UserService from "../../../domain/user/user.service";
import GetTypeTutor from "../../../domain/user/dto/getTypeTutor.dto";

const getTutors = async (req, res) => {
  try {
    const query = req.query;
    const number = Number(query.number);
    const page = Number(query.page);

    const getTypeTutor = new GetTypeTutor(number, page);

    const tutors = await UserService.getUsers(getTypeTutor);

    return res.status(200).send(tutors);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default getTutors;
