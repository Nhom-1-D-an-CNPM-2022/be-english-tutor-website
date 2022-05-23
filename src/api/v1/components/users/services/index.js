import createNewUser from "./createNewUser";
import getAll from "./getAll";
import getOne from "./getOne";
import getOneAndUpdate from "./getOneAndUpdate";
import getOneAndUpgradeAccount from "./getOneAndUpgradeAccount";
import getOneByEmail from "./getOneByEmail";

const userServices = {
  getOneByEmail,
  createNewUser,
  getOne,
  getAll,
  getOneAndUpdate,
  getOneAndUpgradeAccount,
};

export default userServices;
