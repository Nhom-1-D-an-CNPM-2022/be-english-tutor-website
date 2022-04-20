import parseErrorIntoMessage from '../../../helpers/parseErrorIntoMessage';
import tutorServices from '../services';

const getProfile = async (req, res) => {
  try {
    const { tutorId } = req.params;
    const tutor = await tutorServices.getOne(tutorId);

    res.status(200).send(tutor);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default getProfile;
