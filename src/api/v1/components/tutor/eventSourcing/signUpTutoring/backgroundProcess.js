import saveOneTutorProfile from "./saveOneTutorProfile";

const backgroundProcess = userId => {
  setTimeout(async () => {
    await saveOneTutorProfile(userId);
  }, 10000);
};

export default backgroundProcess;
