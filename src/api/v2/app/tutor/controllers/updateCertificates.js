import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";
import TutorService from "../../../domain/tutor/tutor.service";

const updateCertificates = async (req, res) => {
  const { user } = req;
  const { certificates } = req.body;

  try {
    const updatedCertificates = await
      TutorService.getOneByUserIDAndUpdateCertificates(user._id, certificates);

    res.status(200).send(updatedCertificates);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default updateCertificates;
