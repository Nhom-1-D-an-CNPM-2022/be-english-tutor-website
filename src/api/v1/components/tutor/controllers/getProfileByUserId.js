import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import tutorServices from "../services";

const getProfileByUserId = async (req, res) => {
  const { user } = req;

  try {
    const tutor = await tutorServices.getOneByUserId(user._id);
    res.status(200).send({
      ...tutor._doc,
      profilePicture: tutor.profilePicture ? tutor.profilePicture.url : "",
      videoIntroduction: tutor.videoIntroduction
        ? tutor.videoIntroduction.url
        : "",
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default getProfileByUserId;
