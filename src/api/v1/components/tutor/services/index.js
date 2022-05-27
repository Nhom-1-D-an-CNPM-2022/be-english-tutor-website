import getOne from "./getOne";
import getOneByUserId from "./getOneByUserId";
import searchAllTutors from "./searchAllTutors";
import updateCertificatesToCloud from "./updateCertificatesToCloud";
import updateProfileById from "./updateProfileById";
import createNewTutor from "./createNewTutor";
import getAll from "./getAll";
import getOneAndUpdate from "./getOneAndUpdate";
import deleteProfileMedia from "./deleteProfileMedia";
import toDTO from "./toDTO";

const tutorServices = {
  searchAllTutors,
  getOne,
  getOneByUserId,
  updateProfileById,
  updateCertificatesToCloud,
  createNewTutor,
  getAll,
  getOneAndUpdate,
  deleteProfileMedia,
  toDTO,
};

export default tutorServices;
