import uploadVideo from "../../../utils/uploadVideo";
import Tutor from "../model";

const updateVideoIntro = async (req, res) => {
  const { user } = req;
  const { URLFile } = req.body;

  uploadVideo(URLFile)
    .then(async (link) => {
      const filter = { userId: user._id };
      const update = { videoIntroduction: link };
      const tutor = await Tutor.findOneAndUpdate(filter, update);
      return res.status(200).send({ urlVideo: link });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).send(err);
    });
};

export default updateVideoIntro;
