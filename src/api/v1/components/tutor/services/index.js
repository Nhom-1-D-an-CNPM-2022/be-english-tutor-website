import getOne from "./getOne";
import getOneByUserId from "./getOneByUserId";
import searchAllTutors from "./searchAllTutors";
import updateCertificatesToCloud from "./updateCertificatesToCloud";
import updateProfileById from "./updateProfileById";

const tutorServices = {
  searchAllTutors,
  getOne,
  getOneByUserId,
  updateProfileById,
  updateCertificatesToCloud,
};

export default tutorServices;
