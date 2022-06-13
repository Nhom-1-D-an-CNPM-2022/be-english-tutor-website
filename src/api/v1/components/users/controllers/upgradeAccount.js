import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import userServices from "../services";

const upgradeAccount = async (req, res) => {
  const { user } = req;
  try {
    const { minutesPerDay, daysPerWeek, duration } = req.body;

    const upgradeUser = await userServices.getOneAndUpgradeAccount(user._id, {
      minutesPerDay,
      daysPerWeek,
      duration,
    });

    if (upgradeUser.message) {
      res.status(400).send(parseErrorIntoMessage(error));
    }

    res.status(200).send(upgradeUser);
  } catch (error) {
    console.log(parseErrorIntoMessage(error));
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default upgradeAccount;
