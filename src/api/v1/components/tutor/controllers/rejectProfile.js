import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import tutorServices from "../services";

const rejectProfile = async (req, res) => {
  const { id } = req.params;

  try {
    await tutorServices.updateProfileById(id, { status: "rejected" });
    res.status(200).send("Success");
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default rejectProfile;
