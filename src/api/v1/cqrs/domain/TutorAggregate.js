import { AbstractAggregate } from "node-cqrs";

class TutorAggregate extends AbstractAggregate {
  static get handles() {
    return ["createTutorProfile", "updateTutorProfile"];
  }

  static initialTutorProfile = {
    languages: [],
    experience: [],
    education: [],
    certificates: [],
    reviewing: [],
    status: "reviewed",
  };

  constructor({ id, events }) {
    super({
      id,
      events,
    });
  }

  createTutorProfile(payload) {
    this.emit("tutorProfileCreated", {
      ...payload,
    });
  }

  updateTutorProfile(payload) {
    this.emit("tutorProfileUpdated", {
      ...payload,
    });
  }
}

export default TutorAggregate;
