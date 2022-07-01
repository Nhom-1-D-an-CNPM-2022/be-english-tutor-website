// import cloudinary from "../../../utils/cloudinary";
import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import userServices from "../../users/services";
import CreateTutorProfileCommand from "../../../cqrs/commands/CreateTutorProfileCommand";
import container from "../../../cqrs";

const createNewTutor = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFoundByEmail = await userServices.getOneByEmail({
      email,
      isDeleted: false,
    });
    if (userFoundByEmail) {
      throw new Error("Email đã tồn tại");
    }
    const type = "tutor";

    const newUser = await userServices.createNewUser({
      email,
      password,
      type,
    });

    const command = new CreateTutorProfileCommand({
      aggregateId: newUser._id.toString(),
    });

    container.commandBus.send(command.type, command.aggregateId, {
      payload: command.payload,
      context: command.context,
    });

    res.status(200).send("Success");
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default createNewTutor;
