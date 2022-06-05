import parseErrorIntoMessage from '../../../helpers/parseErrorIntoMessage';
import userFavoriteServices from '../services';

const addFavoriteTutor = async (req, res) => {
  const { user } = req;
  const { tutorId } = req.body;

  try {
    let userFavorites = await userFavoriteServices.getOneByUserId(user._id);
    if (!userFavorites) {
      userFavorites = createNewAndSaveToDB(user, tutorId);
    } else {
      addTutorToFavorites(userFavorites, tutorId);
    }
    res.status(200).send(userFavorites);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

function addTutorToFavorites(userFavorites, tutorId) {
  checkTutorExistence(userFavorites.tutors, tutorId);
  userFavorites.tutors?.push(tutorId);
  userFavorites.save();
}

function createNewAndSaveToDB(user, tutorId) {
  const newUserFavorite = userFavoriteServices.create({
    userId: user._id,
    tutors: [tutorId],
  });
  return newUserFavorite;
}

function checkTutorExistence(tutors, tutorId) {
  const foundTutor = tutors?.find((tutor) => tutor._id?.toString() === tutorId);
  if (foundTutor) {
    throw new Error('Tutor is already in favorite list');
  }
}

export default addFavoriteTutor;
