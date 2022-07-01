import AbstractMessage from "../AbstractMessage";
import TutorAggregate from "../domain/TutorAggregate";

class CreateTutorProfileCommand extends AbstractMessage {
  constructor({ context, aggregateId, aggregateVersion, sagaId, sagaVersion }) {
    super({
      type: "createTutorProfile",
      payload: TutorAggregate.initialTutorProfile,
      context,
      aggregateId,
      aggregateVersion,
      sagaId,
      sagaVersion,
    });
  }
}

export default CreateTutorProfileCommand;
