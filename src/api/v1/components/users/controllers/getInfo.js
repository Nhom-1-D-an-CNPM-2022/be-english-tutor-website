import parseErrorIntoMessage from '../../../helpers/parseErrorIntoMessage';
import userServices from '../services';

const getInfo = async (req, res) => {
  const { user } = req;

  try {
    const userFoundById = await userServices.getOne({ _id: user._id });

    res.status(200).send({
      user: userFoundById,
    });
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default getInfo;
