import UserService from '../../../domain/user/user.service';
import parseErrorIntoMessage from '../../../interfaces/helpers/parseErrorIntoMessage';

const loginGoogle = async (req, res) => {
  const { tokenId } = req.body;
  try {
    const { 
      accessToken, 
      refreshToken,
      userFoundByEmail } = UserService.loginByGoogle(tokenId);

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

export default loginGoogle;
