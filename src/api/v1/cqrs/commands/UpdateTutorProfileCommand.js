import AbstractMessage from "../AbstractMessage";

class UpdateTutorProfileCommand extends AbstractMessage {
  constructor({
    payload,
    context,
    aggregateId,
    aggregateVersion,
    sagaId,
    sagaVersion,
  }) {
    super({
      type: "updateTutorProfile",
      payload,
      context,
      aggregateId,
      aggregateVersion,
      sagaId,
      sagaVersion,
    });
  }
}

export default UpdateTutorProfileCommand;
