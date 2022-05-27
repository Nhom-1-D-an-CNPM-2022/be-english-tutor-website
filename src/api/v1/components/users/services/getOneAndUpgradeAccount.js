import User from "../model";

const getOneAndUpgradeAccount = async (
  filter,
  { minutesPerDay, daysPerWeek, duration }
) => {
  let expiredTime = new Date();
  expiredTime.setMonth(expiredTime.getMonth() + duration);
  const upgradeAccount = await User.findOneAndUpdate(
    filter,
    {
      minutesPerDay: minutesPerDay,
      daysPerWeek: daysPerWeek,
      expiredTime: expiredTime,
    },
    {
      new: true,
    }
  );

  return upgradeAccount;
};

export default getOneAndUpgradeAccount;
