import parseErrorIntoMessage from '../../../helpers/parseErrorIntoMessage';
import tutorServices from '../services';

const updateProfile = async (req, res) => {
  const { user } = req;

  try {
    const tutor = await tutorServices.getOneByUserId(user._id);
    const updatedProfile = await tutorServices.updateProfileById(
      tutor._id,
      req.body
    );
    res.status(200).send(updatedProfile);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default updateProfile;
