const updatedEventHandler = (tutorProfile, metadata) => {
  return {
    ...tutorProfile,
    ...metadata,
  };
};

export default updatedEventHandler;
