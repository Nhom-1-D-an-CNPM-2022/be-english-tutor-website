// import cloudinary from "../../../utils/cloudinary";
import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import userServices from "../../users/services";
import tutorServices from "../services";
import signUpTutoringEventSourcing from "../eventSourcing/signUpTutoring";

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

    await tutorServices.createNewTutor({
      userId: newUser._id,
    });

    await signUpTutoringEventSourcing.eventBuilders.createdEventBuilder(
      newUser._id,
      {
        userId: newUser._id,
      },
    );

    res.status(200).send("Success");
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default createNewTutor;
