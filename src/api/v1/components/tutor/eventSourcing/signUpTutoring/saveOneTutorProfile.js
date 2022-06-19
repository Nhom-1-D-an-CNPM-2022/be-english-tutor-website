import SignUpTutoringLog from "./signUpTutoringLog.model";
import signUpTutoringEventHandlers from "./eventHandlers";
import tutorServices from "../../services";

const saveOneTutorProfile = async userId => {
  const existedTutorProfile = await tutorServices.getOneByUserId(userId);
  let tutorProfile = null;

  const records = await SignUpTutoringLog.find({
    userId,
    createdAt: {
      $gte: new Date(existedTutorProfile.updatedAt),
    },
  });

  records.map(record => {
    switch (record.eventType) {
      case "CREATED":
        tutorProfile = signUpTutoringEventHandlers.createdEventHandler(
          record.metadata,
        );
        break;
      case "UPDATED":
        tutorProfile = signUpTutoringEventHandlers.updatedEventHandler(
          tutorProfile,
          record.metadata,
        );
        break;
      default:
        break;
    }
  });

  await tutorServices.updateProfileById(existedTutorProfile._id, {
    data: {
      ...tutorProfile,
    },
  });
};

export default saveOneTutorProfile;
