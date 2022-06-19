const defaultTutorProfile = {
  languages: [],
  experience: [],
  education: [],
  certificates: [],
  reviewing: [],
  status: "reviewed",
};

const createdEventHandler = async metadata => {
  return {
    defaultTutorProfile,
    ...metadata,
  };
};

export default createdEventHandler;
