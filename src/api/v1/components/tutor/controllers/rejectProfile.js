import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import UpdateTutorProfileCommand from "../../../cqrs/commands/UpdateTutorProfileCommand";
import container from "../../../cqrs";

const rejectProfile = async (req, res) => {
  const { id } = req.params;

  try {
    // await tutorServices.updateProfileById(id, { status: "rejected" });
    const command = new UpdateTutorProfileCommand({
      aggregateId: id,
      payload: {
        status: "rejected",
      },
    });

    container.commandBus.send(command.type, command.aggregateId, {
      payload: command.payload,
      context: command.context,
    });
    res.status(200).send("Success");
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default rejectProfile;
