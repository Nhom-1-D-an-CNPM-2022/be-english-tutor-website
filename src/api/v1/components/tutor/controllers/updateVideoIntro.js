import uploadVideo from '../../../utils/uploadVideo';
import tutorServices from '../services';

const updateVideoIntro = async (req, res) => {
  const { user } = req;
  const { URLFile } = req.body;

  uploadVideo(URLFile)
    .then(async (link) => {
      const filter = { userId: user._id };
      const update = { videoIntroduction: link };
      await tutorServices.getOneAndUpdate(filter, update);
      return res.status(200).send({ url: link });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).send(err);
    });
};

export default updateVideoIntro;
