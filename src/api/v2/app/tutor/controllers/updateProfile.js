import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";
import Tutor from "../../../domain/tutor/tutor.entity";
import TutorService from "../../../domain/tutor/tutor.service";

const updateProfile = async (req, res) => {
  const { user } = req;

  try {
    const updatedProfile = await TutorService.getOneByUserIDAndUpdate(
      user._id,
      req.body
    );

    res.status(200).send(Tutor.toDTO(updatedProfile));
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default updateProfile;
