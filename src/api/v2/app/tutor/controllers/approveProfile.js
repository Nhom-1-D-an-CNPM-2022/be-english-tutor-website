import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";
import TutorService from "../../../domain/tutor/tutor.service";

const approveProfile = async (req, res) => {
  const { tutorId, dataUpdate } = req.body;

  try {
    await TutorService.getOneByIdAndUpdate(tutorId, dataUpdate.data);
    res.status(200).send("Success");
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default approveProfile;
