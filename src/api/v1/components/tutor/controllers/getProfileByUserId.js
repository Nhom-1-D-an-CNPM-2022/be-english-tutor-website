import TutorProfileWriteModel from "../../../cqrs/infrastructure/tutorProfileWriteModel.schema";
import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import tutorServices from "../services";

const getProfileByUserId = async (req, res) => {
  const { user } = req;

  try {
    const tutor = await tutorServices.getOneByUserId(user._id);

    if (user.type === "tutor") {
      if (tutor) {
        res.status(200).send(tutorServices.toDTO(tutor));
      } else {
        res.status(200).send({});
      }
    } else {
      res.status(400).send("You are not a tutor");
    }
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default getProfileByUserId;
