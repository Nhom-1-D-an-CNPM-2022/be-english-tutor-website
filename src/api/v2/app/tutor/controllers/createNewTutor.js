// import cloudinary from "../../../utils/cloudinary";
import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";
import TutorService from "../../../domain/tutor/tutor.service";
import RegisterByEmail from "../../../domain/user/dto/registerByEmail.dto";

const createNewTutor = async (req, res) => {
  const { email, password } = req.body;
  try {
    const type = 'tutor';
    const registerByEmail = new RegisterByEmail(email, password, "", type);

    const newTutor = await TutorService.createNewTutor(registerByEmail);

    res.status(201).send(newTutor);
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
