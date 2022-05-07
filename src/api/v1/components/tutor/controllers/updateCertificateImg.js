import uploadImg from "../../../utils/uploadImage";
import Tutor from "../model";

const updateCertificateImg = async (req, res) => {
  const { user } = req;
  const { URLFile } = req.body;

  uploadImg(URLFile)
    .then(async (link) => {
      const filter = { userId: user._id };
      const update = { imageCertificates: link };
      const tutor = await Tutor.findOneAndUpdate(filter, update);
      return res.status(200).send({ urlImg: link });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).send(err);
    });
};

export default updateCertificateImg;
