import User from "../model";
import bcrypt from "bcrypt";
import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import userServices from "../services";

const loginTutor = async (req, res) => {
  const { email, password } = req.body;

  try {
    let tutorFoundByEmail;
    try {
      tutorFoundByEmail = await userServices.getOne({
        email,
        isDeleted: false,
        type: "tutor",
      });
    } catch (error) {
      throw new Error("Email is incorrect");
      res.status(200).send()
    }

    const isVerify = await bcrypt.compare(password, tutorFoundByEmail.password);

    if (isVerify) {
      const { accessToken, refreshToken } =
        User.generateToken(tutorFoundByEmail);
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
    } else {
      throw new Error("Password is incorrect");
    }
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default loginTutor;
