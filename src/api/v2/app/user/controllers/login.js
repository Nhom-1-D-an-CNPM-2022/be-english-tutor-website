import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";
import UserService from "../../../domain/user/user.service";
import LoginByEmail from "../../../domain/user/dto/loginByEmail.dto";

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const loginByEmail = new LoginByEmail(email, password);
    
    const { accessToken,
      refreshToken,
      userFoundByEmail } = await UserService.loginByEmail(loginByEmail);

    res.cookie(process.env.REFRESH_TOKEN_KEY, refreshToken, {
      httpOnly: true,
      secure: false,
      path: '/',
      sameSite: 'strict',
    });

    res.status(200).send({
      user: userFoundByEmail,
      accessToken: accessToken,
    });

  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

// const login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const userFoundByEmail = await User.findOne({ email, isDeleted: false });

//     if (!userFoundByEmail) {
//       throw new Error('Email is incorrect');
//     }

//     if (await bcrypt.compare(password, userFoundByEmail.password)) {
//       const { accessToken, refreshToken } =
//         User.generateToken(userFoundByEmail);
//       res.cookie(process.env.REFRESH_TOKEN_KEY, refreshToken, {
//         httpOnly: true,
//         secure: false,
//         path: '/',
//         sameSite: 'strict',
//       });
//       console.log(refreshToken);

//       res.status(200).send({
//         user: userFoundByEmail,
//         accessToken: accessToken,
//       });
//     } else {
//       throw new Error('Password is incorrect');
//     }
//   } catch (error) {
//     res.status(400).send(parseErrorIntoMessage(error));
//   }
// };

export default login;
