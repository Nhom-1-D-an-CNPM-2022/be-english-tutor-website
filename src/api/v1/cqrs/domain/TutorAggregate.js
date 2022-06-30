import { AbstractAggregate } from "node-cqrs";

class TutorAggregate extends AbstractAggregate {
  static get handles() {
    return ["createTutorProfile", "updateTutorProfile"];
  }

  constructor({ id, events }) {
    super({
      id,
      events,
    });
  }

  createTutorProfile(payload) {
    const { initialProfile } = payload;

    this.emit("tutorProfileCreated", {
      initialProfile,
    });
  }

  updateTutorProfile(payload) {
    this.emit("tutorProfileUpdated", {
      ...payload,
    });
  }
}

export default TutorAggregate;
