import UserService from '../../../domain/user/user.service';
import parseErrorIntoMessage from '../../../interfaces/helpers/parseErrorIntoMessage';

const loginFacebook = async (req, res) => {
  const { accessToken:facebookToken } = req.body;

  try {
    const {
      accessToken,
      refreshToken,
      userFoundByFacebook
    } = await UserService.loginByFacebook(facebookToken);

    res.cookie(process.env.REFRESH_TOKEN_KEY, refreshToken, {
      httpOnly: true,
      secure: false,
      path: '/',
      sameSite: 'strict',
    });

    res.status(200).json({
      user: userFoundByFacebook,
      accessToken: accessToken,
    });
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default loginFacebook;
