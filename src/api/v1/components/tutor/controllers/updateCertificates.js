import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import tutorServices from "../services";

const updateCertificates = async (req, res) => {
  const { user } = req;
  const { certificates } = req.body;

  try {
    const tutor = await tutorServices.getOneByUserId(user._id);
    const updatedCertificates = await tutorServices.updateCertificatesToCloud(
      tutor._id,
      certificates,
    );

    res.status(200).send(updatedCertificates);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default updateCertificates;
