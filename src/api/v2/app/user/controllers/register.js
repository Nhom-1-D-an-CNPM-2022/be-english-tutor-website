import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";
import UserService from "../../../domain/user/user.service";
import RegisterByEmail from "../../../domain/user/dto/registerByEmail.dto";

const register = async (req, res) => {
  const { email, password, fullname } = req.body;
  try {
    const registerByEmail = new RegisterByEmail(email, password, fullname);
    const newUser = await UserService.registerByEmail(registerByEmail);

    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default register;
