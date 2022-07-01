import mongoose from "mongoose";
import { AbstractProjection } from "node-cqrs";
import TutorAggregate from "../domain/TutorAggregate";

class TutorProjection extends AbstractProjection {
  static get handles() {
    return ["tutorProfileCreated", "tutorProfileUpdated"];
  }

  constructor({
    tutorProfileReadModelRepository,
    tutorProfileWriteModelRepository,
  }) {
    super();
    this._tutorProfileReadModelRepository = tutorProfileReadModelRepository;
    this._tutorProfileWriteModelRepository = tutorProfileWriteModelRepository;
  }

  async tutorProfileCreated({ aggregateId, payload }) {
    aggregateId = new mongoose.Types.ObjectId(aggregateId);

    const existedProfile =
      await this._tutorProfileReadModelRepository.getProfile(aggregateId);

    if (!existedProfile) {
      await this._tutorProfileReadModelRepository.createProfile(aggregateId, {
        ...payload,
      });
    }
  }

  async _generateTutorProfileFromCreatedEvent(aggregateId) {
    return {
      ...TutorAggregate.initialTutorProfile,
      userId: new mongoose.Types.ObjectId(aggregateId),
    };
  }

  async _generateTutorProfileFromUpdatedEvent(previousState, payload) {
    return {
      ...previousState,
      ...payload,
    };
  }

  async _generateTutorProfileFromEvents(aggregateId) {
    const events = await this._tutorProfileWriteModelRepository.getEvents(
      aggregateId,
    );

    let tutorProfile = null;

    if (events) {
      for (let i = 0; i < events.length; i++) {
        switch (events[i].type) {
          case "tutorProfileCreated":
            tutorProfile =
              this._generateTutorProfileFromCreatedEvent(aggregateId);
            break;

          case "tutorProfileUpdated":
            tutorProfile = this._generateTutorProfileFromUpdatedEvent(
              tutorProfile,
              events[i].payload,
            );
            break;

          default:
            break;
        }
      }
    }

    return tutorProfile;
  }

  async tutorProfileUpdated({ aggregateId, payload }) {
    const newestTutorProfile = await this._generateTutorProfileFromEvents(
      aggregateId,
    );

    await this._tutorProfileReadModelRepository.updateProfile(aggregateId, {
      ...newestTutorProfile,
    });
  }
}

export default TutorProjection;
