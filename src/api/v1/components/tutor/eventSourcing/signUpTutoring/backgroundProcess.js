import saveOneTutorProfile from "./saveOneTutorProfile";

const backgroundProcess = userId => {
  setTimeout(async () => {
    await saveOneTutorProfile(userId);
  }, 60000);
};

export default backgroundProcess;
