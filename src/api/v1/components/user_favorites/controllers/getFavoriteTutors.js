import parseErrorIntoMessage from '../../../helpers/parseErrorIntoMessage';
import userFavoriteServices from '../services';

const getFavoriteTutors = async (req, res) => {
  const { user } = req;

  try {
    const userFavorites = await userFavoriteServices.getOneByUserId(user._id);
    const { tutors } = userFavorites;
    res.status(200).send(tutors);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default getFavoriteTutors;
