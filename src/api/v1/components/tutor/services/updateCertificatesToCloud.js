import uploadImg from "../../../utils/uploadImage";
import Tutor from "../model";

const updateCertificatesToCloud = async (tutorId, certificates) => {
  if (certificates.length === 0) {
    const update = { certificates: [] };
    await Tutor.findByIdAndUpdate(tutorId, update, {
      new: true,
    });
    return certificates;
  }

  const updatedCertificates = await certificates.map(async (certificate) => {
    return await uploadImg(certificate.URLFile);
  });

  return await Promise.all(updatedCertificates)
    .then(async (links) => {
      let certificateUpdated = [];
      links.map((link, index) => {
        certificateUpdated.push({
          url: link,
          type: certificates[index].type,
          fileName: certificates[index].fileName,
        });
      });

      const update = { certificates: certificateUpdated };
      await Tutor.findByIdAndUpdate(tutorId, update, {
        new: true,
      });

      return certificateUpdated;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
export default updateCertificatesToCloud;
