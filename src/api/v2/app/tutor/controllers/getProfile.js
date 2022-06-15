import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";
import Tutor from "../../../domain/tutor/tutor.entity";
import TutorService from "../../../domain/tutor/tutor.service";
import GetOneById from "../../../domain/tutor/dto/getOneById.dto";

const getProfile = async (req, res) => {
  try {
    const { tutorId } = req.params;
    const getOneById = new GetOneById(tutorId);

    const tutor = await TutorService.getOne(getOneById);

    res.status(200).send(Tutor.toDTO(tutor));
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default getProfile;
