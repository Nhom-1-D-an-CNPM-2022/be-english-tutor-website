import uploadImg from '../../../utils/uploadImage';
import tutorServices from '../services';

const updateProfilePicture = async (req, res) => {
  const { user } = req;
  const { URLFile } = req.body;
  console.log('picture');

  uploadImg(URLFile)
    .then(async (link) => {
      const filter = { userId: user._id };
      const update = { profilePicture: link };
      await tutorServices.getOneAndUpdate(filter, update);
      return res.status(200).send({ url: link });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).send(err);
    });
};

export default updateProfilePicture;
