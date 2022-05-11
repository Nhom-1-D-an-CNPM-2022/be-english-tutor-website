import getOneByEmail from './getOneByEmail';
import getOne from './getOne';
import getAll from './getAll';
import getOneAndUpdate from './getOneAndUpdate';
import createNewUser from './createNewUser';

const userServices = {
  getOneByEmail,
  createNewUser,
  getOne,
  getAll,
  getOneAndUpdate,
};

export default userServices;
