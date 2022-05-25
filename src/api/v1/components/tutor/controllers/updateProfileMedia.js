import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import tutorServices from "../services";

const updateProfileMedia = async (req, res) => {
  const { user } = req;
  const { mediaType, profileMedia } = req.body;

  try {
    const tutor = await tutorServices.getOneByUserId(user._id);

    switch (mediaType) {
      case "picture": {
        await tutorServices.updateProfileById(tutor._id, {
          profilePicture: profileMedia,
        });

        return res.status(200).send({ profilePicture: profileMedia.url });
      }
      case "videoIntroduction": {
        await tutorServices.updateProfileById(tutor._id, {
          videoIntroduction: profileMedia,
        });

        return res.status(200).send({ videoIntroduction: profileMedia.url });
      }
      default: {
        break;
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default updateProfileMedia;
