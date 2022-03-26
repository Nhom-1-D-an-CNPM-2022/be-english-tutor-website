import User from '../model';

import parseErrorIntoMessage from '../../../helpers/parseErrorIntoMessage';
import facebookAccountVerification from '../helpers/facebookAccountVerification';

const loginFacebook = async (req, res) => {
  const { accessToken, userId} = req.body;
  
  try {
    if (!accessToken || !userId) {
      throw new Error('Invalid information');
    }

    const facebookAccount = await facebookAccountVerification(accessToken, userId);
    const { id: facebookId, name } = facebookAccount;
    const userFoundByFacebookId = await User.findOne({facebookId, isDeleted: false });
    if(userFoundByFacebookId) {
      res.status(200).send({
        "facebookId": facebookId,
        "user": userFoundByFacebookId ,
        "tokens": {
            "access": "",
            "refresh": ""
        }
      });
    }
    else {
      throw new Error('Create new account');
      // const user = new User({
      //   email,
      //   password,
      //   fullname,
      //   googleId,
      //   isVerified: true,
      // });
      // const savedUser = await user.save();
      // res.status(201).send(savedUser);
    }
  }catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default loginFacebook;
