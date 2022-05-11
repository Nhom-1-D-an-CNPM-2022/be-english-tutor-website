// import cloudinary from "../../../utils/cloudinary";
import parseErrorIntoMessage from '../../../helpers/parseErrorIntoMessage';
import userServices from '../../users/services';
import tutorServices from '../services';

const createNewTutor = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFoundByEmail = await userServices.getOneByEmail({
      email,
      isDeleted: false,
    });
    if (userFoundByEmail) {
      throw new Error('Email đã tồn tại');
    }
    const type = 'tutor';

    const newUser = await userServices.createNewUser({
      email,
      password,
      type,
    });

    const newTutor = await tutorServices.createNewTutor({
      userId: newUser._id,
    });

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
