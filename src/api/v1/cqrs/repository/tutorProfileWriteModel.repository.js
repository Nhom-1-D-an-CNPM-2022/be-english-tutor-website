import TutorProfileWriteModel from "../infrastructure/tutorProfileWriteModel.schema";

const getEvents = async aggregateId => {
  try {
    const events = await TutorProfileWriteModel.find({
      aggregateId,
    });

    return events;
  } catch (err) {
    return null;
  }
};

const tutorProfileWriteModelRepository = {
  getEvents,
};

export default tutorProfileWriteModelRepository;
