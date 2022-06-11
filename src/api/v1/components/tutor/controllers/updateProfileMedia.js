import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import tutorServices from "../services";

const updateProfileMedia = async (req, res) => {
  const { user } = req;
  const { mediaType, profileMedia } = req.body;

  try {
    const tutor = await tutorServices.getOneByUserId(user._id);

    if (tutor[mediaType]) {
      tutorServices.deleteProfileMedia(mediaType, tutor[mediaType].publicId);
    }

    await tutorServices.updateProfileById(tutor._id, {
      data: {
        [mediaType]: profileMedia,
      },
    });

    res.status(200).send({ [mediaType]: profileMedia.url });
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default updateProfileMedia;
