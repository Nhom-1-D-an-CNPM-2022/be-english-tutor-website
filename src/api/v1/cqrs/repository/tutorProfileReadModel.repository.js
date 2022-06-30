import TutorProfileReadModel from "../infrastructure/tutorProfileReadModel.schema";

const createProfile = async (aggregateId, initialProfile) => {
  try {
    await TutorProfileReadModel.create({
      userId: aggregateId,
      ...initialProfile,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateProfile = async (aggregateId, newInformation) => {
  try {
    await TutorProfileReadModel.findOneAndUpdate(
      {
        userId: aggregateId,
      },
      {
        ...newInformation,
      },
    );
  } catch (err) {
    console.log(err);
  }
};

const getProfile = async aggregateId => {
  try {
    const profile = await TutorProfileReadModel.findOne({
      userId: aggregateId,
    });

    return profile;
  } catch (err) {
    console.log(err);
  }
};

const tutorProfileReadModelRepository = {
  createProfile,
  updateProfile,
  getProfile,
};

export default tutorProfileReadModelRepository;