import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";
import UserService from "../../../domain/user/user.service";
import UpgradeAccount from "../../../domain/user/dto/upgradeAccount.dto";

const upgradeAccount = async (req, res) => {
  const { user } = req;
  try {
    const { minutesPerDay, daysPerWeek, duration } = req.body;

    const upgradeAccount = new UpgradeAccount(minutesPerDay, daysPerWeek, duration);
    const upgradeUser = await UserService.getOneAndUpgradeAccount(user._id, upgradeAccount);

    res.status(200).send(upgradeUser);
  } catch (error) {
    console.log(parseErrorIntoMessage(error));
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default upgradeAccount;
