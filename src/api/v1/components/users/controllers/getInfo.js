import User from "../model";
import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";

const getInfo = async (req, res) => {
  const { user } = req;

  try {
    const userFindById = await User.findById(user._id);
    if (userFindById === null) {
      throw new Error("User is not found");
    }

    res.status(200).send({
      user: userFindById,
    });
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default getInfo;
