import cloudinary from "../../../utils/cloudinary";
import Tutor from "../model";

const createNewTutor = async (req, res) => {
  // Clear index
  Tutor.collection.dropIndexes(function (err, results) {});

  // // Get user._id
  // const userId = req.query._id;

  const {
    userId,
    displayName,
    hometown,
    dateOfBirth,
    videoIntroduction,
    introduction,
    teachingStyles,
    aboutMe,
    languages,
    experience,
    education,
    imageCertificates,
  } = req.body;

  // upload video to cloudinary
  let linkVideo;
  try {
    const uploadResponse = await cloudinary.uploader.upload(videoIntroduction, {
      resource_type: "video",
      upload_preset: "dev_setups",
    });
    if (uploadResponse) {
      linkVideo = uploadResponse.url;
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Can't upload video cloudinary" });
  }

  // upload image to cloudinary
  let linkImage;
  try {
    const uploadResponse = await cloudinary.uploader.upload(imageCertificates, {
      upload_preset: "dev_setups",
    });
    if (uploadResponse) {
      linkImage = uploadResponse.url;
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Can't upload image cloudinary" });
  }

  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Can't load image/video from cloudinary" });
  }

  Tutor.create(
    {
      userId,
      displayName,
      hometown,
      dateOfBirth,
      videoIntroduction: linkVideo,
      introduction,
      teachingStyles,
      aboutMe,
      languages,
      experience,
      education,
      imageCertificates: linkImage,
    },
    (err, tutor) => {
      if (err) {
        return res.status(500).json({ message: err });
      }

      res.status(200).json({ message: "Register new tutor success" });
    }
  );
};

export default createNewTutor;
