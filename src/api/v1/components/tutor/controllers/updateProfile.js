import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import UpdateTutorProfileCommand from "../../../cqrs/commands/UpdateTutorProfileCommand";
import container from "../../../cqrs";

const updateProfile = async (req, res) => {
  const { user } = req;

  try {
    // const tutor = await tutorServices.getOneByUserId(user._id);
    // const updatedProfile = await tutorServices.updateProfileById(
    //   tutor._id,
    //   req.body,
    // );
    // res.status(200).send(tutorServices.toDTO(updatedProfile));

    const command = new UpdateTutorProfileCommand({
      aggregateId: user._id,
      payload: {
        ...req.body.data,
      },
    });

    container.commandBus.send(command.type, command.aggregateId, {
      payload: command.payload,
      context: command.context,
    });

    res.status(200).send({
      ...req.body.data,
    });
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default updateProfile;
