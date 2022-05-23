import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import tutorServices from "../services";

const getProfileByUserId = async (req, res) => {
  const { user } = req;

  try {
    const tutor = await tutorServices.getOneByUserId(user._id);
    res.status(200).send(tutor);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default getProfileByUserId;
