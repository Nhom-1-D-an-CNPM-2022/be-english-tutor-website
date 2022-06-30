import { AbstractProjection } from "node-cqrs";

class TutorProjection extends AbstractProjection {
  static get handles() {
    return ["tutorProfileCreated", "tutorProfileUpdated"];
  }

  constructor({ tutorProfileReadModelRepository }) {
    super();
    this._tutorProfileReadModelRepository = tutorProfileReadModelRepository;
  }

  async tutorProfileCreated({ aggregateId, payload }) {
    const { initialProfile } = payload;

    await this._tutorProfileReadModelRepository.createProfile(
      aggregateId,
      initialProfile,
    );
  }

  async tutorProfileUpdated({ aggregateId, payload }) {
    const { newInformation } = payload;

    await this._tutorProfileReadModelRepository.updateProfile(
      aggregateId,
      newInformation,
    );
  }
}

export default TutorProjection;
