import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";
import Tutor from "../../../domain/tutor/tutor.entity";
import TutorService from "../../../domain/tutor/tutor.service";
import GetOneByUserId from "../../../domain/tutor/dto/getOneByUserId.dto";

const getProfileByUserId = async (req, res) => {
  const { user } = req;

  try {
    const getOneByUserId = new GetOneByUserId(user._id);
    const tutor = await TutorService.getOne(getOneByUserId);
    res.status(200).send(Tutor.toDTO(tutor));
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default getProfileByUserId;
