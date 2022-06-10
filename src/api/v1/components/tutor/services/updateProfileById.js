import Tutor from "../model";

const updateProfileById = async (tutorId, updateInformation) => {
  const updatedProfile = await Tutor.findByIdAndUpdate(
    tutorId,
    updateInformation.data,
    { new: true }
  );

  return updatedProfile;
};

export default updateProfileById;
