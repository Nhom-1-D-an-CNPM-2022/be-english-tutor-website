import getOne from './getOne';
import getOneByUserId from './getOneByUserId';
import searchAllTutors from './searchAllTutors';
import updateCertificatesToCloud from './updateCertificatesToCloud';
import updateProfileById from './updateProfileById';
import createNewTutor from './createNewTutor';
import getAll from './getAll';

const tutorServices = {
  searchAllTutors,
  getOne,
  getOneByUserId,
  updateProfileById,
  updateCertificatesToCloud,
  createNewTutor,
  getAll,
};

export default tutorServices;
