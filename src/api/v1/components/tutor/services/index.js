import getOne from './getOne';
import getOneByUserId from './getOneByUserId';
import searchAllTutors from './searchAllTutors';
import updateCertificatesToCloud from './updateCertificatesToCloud';
import updateProfileById from './updateProfileById';
import createNewTutor from './createNewTutor';

const tutorServices = {
  searchAllTutors,
  getOne,
  getOneByUserId,
  updateProfileById,
  updateCertificatesToCloud,
  createNewTutor,
};

export default tutorServices;
