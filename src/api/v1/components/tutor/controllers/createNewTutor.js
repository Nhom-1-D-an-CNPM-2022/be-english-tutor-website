// import cloudinary from "../../../utils/cloudinary";
import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import User from "../../users/model";
import Tutor from "../model";

const createNewTutor = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFoundByEmail = await User.findOne({ email, isDeleted: false });
    if (userFoundByEmail) {
      throw new Error("Email đã tồn tại");
    }
    const type = "tutor";
    const user = new User({
      email,
      password,
      type,
    });
    const savedUser = await user.save();

    const tutor = new Tutor({
      userId: savedUser._id,
    });
    const saveTutor = await tutor.save();

    res.status(201).send(saveTutor);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }

  // Tutor.create(
  //   {
  //     userId,
  //     displayName,
  //     hometown,
  //     dateOfBirth,
  //     videoIntroduction: linkVideo,
  //     introduction,
  //     teachingStyles,
  //     aboutMe,
  //     languages,
  //     experience,
  //     education,
  //     imageCertificates: linkImage,
  //   },
  //   (err, tutor) => {
  //     if (err) {
  //       return res.status(500).json({ message: err });
  //     }

  //     res.status(200).json({ message: "Register new tutor success" });
  //   }
  // );
};

export default createNewTutor;
