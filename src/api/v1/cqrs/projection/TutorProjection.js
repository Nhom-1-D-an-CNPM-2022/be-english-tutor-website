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
    await this._tutorProfileReadModelRepository.createProfile(aggregateId, {
      ...payload,
    });
  }

  async tutorProfileUpdated({ aggregateId, payload }) {
    await this._tutorProfileReadModelRepository.updateProfile(aggregateId, {
      ...payload,
    });
  }
}

export default TutorProjection;
