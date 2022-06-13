import parseErrorIntoMessage from '../../../helpers/parseErrorIntoMessage';
import userServices from '../services';

const register = async (req, res) => {
  const { email, password, fullname } = req.body;
  try {
    let userFoundByEmail;
    try {
      userFoundByEmail = await userServices.getOne({ email, isDeleted: false });
    } catch (error) {
    } finally {
      if (userFoundByEmail) throw new Error('Email đã tồn tại');
    }

    const newUser = await userServices.createNewUser({
      email,
      password,
      fullname,
    });

    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default register;
