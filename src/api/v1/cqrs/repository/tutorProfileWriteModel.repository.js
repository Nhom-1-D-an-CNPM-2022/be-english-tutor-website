import TutorProfileWriteModel from "../infrastructure/tutorProfileWriteModel.schema";

const getEvents = async (aggregateId, lastUpdatedTimeStamp) => {
  try {
    const events = await TutorProfileWriteModel.find({
      aggregateId,
      createdAt: {
        $gt: lastUpdatedTimeStamp,
      },
    });

    return events;
  } catch (err) {
    console.log(err);
  }
};

const tutorProfileWriteModelRepository = {
  getEvents,
};

export default tutorProfileWriteModelRepository;
