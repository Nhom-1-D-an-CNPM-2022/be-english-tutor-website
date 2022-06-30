import AbstractMessage from "../AbstractMessage";

class CreateTutorProfileCommand extends AbstractMessage {
  constructor({
    payload,
    context,
    aggregateId,
    aggregateVersion,
    sagaId,
    sagaVersion,
  }) {
    super({
      type: "createTutorProfile",
      payload,
      context,
      aggregateId,
      aggregateVersion,
      sagaId,
      sagaVersion,
    });
  }
}

export default CreateTutorProfileCommand;
