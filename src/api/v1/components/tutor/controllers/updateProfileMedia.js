import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import UpdateTutorProfileCommand from "../../../cqrs/commands/UpdateTutorProfileCommand";
import container from "../../../cqrs";

const updateProfileMedia = async (req, res) => {
  const { user } = req;
  const { mediaType, profileMedia } = req.body;

  try {
    // const tutor = await tutorServices.getOneByUserId(user._id);

    // if (tutor[mediaType]) {
    //   tutorServices.deleteProfileMedia(mediaType, tutor[mediaType].publicId);
    // }

    // await tutorServices.updateProfileById(tutor._id, {
    //   data: {
    //     [mediaType]: profileMedia,
    //   },
    // });

    const command = new UpdateTutorProfileCommand({
      aggregateId: user._id,
      payload: {
        [mediaType]: profileMedia,
      },
    });

    container.commandBus.send(command.type, command.aggregateId, {
      payload: command.payload,
      context: command.context,
    });

    res.status(200).send({ [mediaType]: profileMedia.url });
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default updateProfileMedia;
