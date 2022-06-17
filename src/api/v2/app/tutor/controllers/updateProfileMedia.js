import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";
import TutorService from "../../../domain/tutor/tutor.service";

const updateProfileMedia = async (req, res) => {
  const { user } = req;
  const { mediaType, profileMedia } = req.body;

  try {
    await TutorService.getOneByUserIDAndUpdate(user._id, {
      [mediaType]: profileMedia,
    })

    res.status(200).send({ [mediaType]: profileMedia.url });
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default updateProfileMedia;
