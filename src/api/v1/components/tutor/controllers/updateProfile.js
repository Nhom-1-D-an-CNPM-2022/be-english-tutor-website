import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import tutorServices from "../services";
import signUpTutoringEventSourcing from "../eventSourcing/signUpTutoring";

const updateProfile = async (req, res) => {
  const { user } = req;

  try {
    // const tutor = await tutorServices.getOneByUserId(user._id);
    // const updatedProfile = await tutorServices.updateProfileById(
    //   tutor._id,
    //   req.body,
    // );
    // res.status(200).send(tutorServices.toDTO(updatedProfile));
    await signUpTutoringEventSourcing.eventBuilders.updatedEventBuilder(
      user._id,
      {
        ...req.body.data,
      },
    );

    signUpTutoringEventSourcing.backgroundProcess(user._id);

    res.status(200).send({
      ...req.body.data,
    });
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default updateProfile;
