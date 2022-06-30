import AbstractMessage from "../AbstractMessage";

class UpdateTutorProfileCommand extends AbstractMessage {
  constructor(payload, context) {
    super({ type: "updateTutorProfile", payload, context });
  }
}

export default UpdateTutorProfileCommand;
