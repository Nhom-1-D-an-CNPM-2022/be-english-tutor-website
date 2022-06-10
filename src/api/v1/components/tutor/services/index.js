import createNewTutor from "./createNewTutor";
import deleteProfileMedia from "./deleteProfileMedia";
import getAll from "./getAll";
import getOne from "./getOne";
import getOneAndUpdate from "./getOneAndUpdate";
import getOneByUserId from "./getOneByUserId";
import getRating from "./getRating";
import searchAllTutors from "./searchAllTutors";
import toDTO from "./toDTO";
import updateCertificatesToCloud from "./updateCertificatesToCloud";
import updateProfileById from "./updateProfileById";
import updateReviewing from "./updateReviewing";

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
  updateReviewing,
  getRating,
};

export default tutorServices;
