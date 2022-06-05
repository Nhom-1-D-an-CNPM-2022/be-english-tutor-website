import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import tutorServices from "../services";

const approveProfile = async (req, res) => {
  const { tutorId, dataUpdate } = req.body;

  try {
    await tutorServices.updateProfileById(tutorId, dataUpdate);
    res.status(200).send("Success");
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default approveProfile;
