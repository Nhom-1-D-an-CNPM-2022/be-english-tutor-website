import Tutor from '../model';

const updateProfileById = async (tutorId, updateInformation) => {
  const updatedProfile = await Tutor.findByIdAndUpdate(
    tutorId,
    updateInformation,
    { new: true }
  );

  return updatedProfile;
};

export default updateProfileById;
