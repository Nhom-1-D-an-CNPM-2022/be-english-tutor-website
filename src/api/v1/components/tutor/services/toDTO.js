const toDTO = tutor => {
  return {
    ...tutor._doc,
    profilePicture: tutor.profilePicture ? tutor.profilePicture.url : "",
    videoIntroduction: tutor.videoIntroduction
      ? tutor.videoIntroduction.url
      : "",
    demoLesson: tutor.demoLesson ? tutor.demoLesson.url : "",
  };
};

export default toDTO;
