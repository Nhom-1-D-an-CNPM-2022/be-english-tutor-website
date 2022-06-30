import SignUpTutoringLog from "./signUpTutoringLog.model";
import signUpTutoringEventHandlers from "./eventHandlers";
import tutorServices from "../../services";

const backgroundProcess = userId => {
  setTimeout(async () => {
    const existedTutorProfile = await tutorServices.getOneByUserId(userId);
    let tutorProfile = {};

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

    if (existedTutorProfile) {
      await tutorServices.updateProfileById(existedTutorProfile._id, {
        data: {
          ...tutorProfile,
        },
      });
    } else {
      const newTutorProfile = await tutorServices.createNewTutor({
        userId,
      });

      await tutorServices.updateProfileById(newTutorProfile._id, {
        data: {
          ...tutorProfile,
        },
      });
    }
  }, 60000);
};

export default backgroundProcess;
