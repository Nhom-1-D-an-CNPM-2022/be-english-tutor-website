const toDTO = tutor => {
  const tutorDoc = tutor._doc ? tutor._doc : tutor;

  return {
    ...tutorDoc,
    profilePicture: tutor.profilePicture ? tutor.profilePicture.url : "",
    videoIntroduction: tutor.videoIntroduction
      ? tutor.videoIntroduction.url
      : "",
    demoLesson: tutor.demoLesson ? tutor.demoLesson.url : "",
  };
};

export default toDTO;
