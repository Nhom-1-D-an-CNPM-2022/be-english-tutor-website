import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import tutorServices from "../services";
import signUpTutoringEventSourcing from "../eventSourcing/signUpTutoring";

const rejectProfile = async (req, res) => {
  const { id } = req.params;

  try {
    // await tutorServices.updateProfileById(id, { status: "rejected" });
    await signUpTutoringEventSourcing.eventBuilders.updatedEventBuilder(id, {
      status: "rejected",
    });
    signUpTutoringEventSourcing.backgroundProcess(id);
    res.status(200).send("Success");
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default rejectProfile;
