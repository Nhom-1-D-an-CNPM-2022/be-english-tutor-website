import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";
import UserService from "../../../domain/user/user.service";
import LoginByEmail from "../../../domain/user/dto/loginByEmail.dto";

const loginTutor = async (req, res) => {
  const { email, password } = req.body;

  try {

    const loginByEmail = new LoginByEmail(email, password, "tutor");
    
    const { accessToken,
      refreshToken,
      tutorFoundByEmail } = await UserService.loginByEmail(loginByEmail);

    res.cookie(process.env.REFRESH_TOKEN_KEY, refreshToken, {
      httpOnly: true,
      secure: false,
      path: "/",
      sameSite: "strict",
    });

    res.status(200).send({
      user: tutorFoundByEmail,
      accessToken: accessToken,
    });
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default loginTutor;
