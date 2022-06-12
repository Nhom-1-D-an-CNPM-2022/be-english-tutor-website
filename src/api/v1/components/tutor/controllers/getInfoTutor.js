import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import tutorServices from "../services";

const getInfoTutor = async (req, res) => {
  const { user } = req;

  try {
    const tutorFoundById = await tutorServices.getOneByUserId(user._id);

    res.status(200).send({
      tutor: tutorFoundById,
    });
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default getInfoTutor;
