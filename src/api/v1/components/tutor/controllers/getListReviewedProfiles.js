import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import tutorServices from "../services";

const getListReviewedProfiles = async (req, res) => {
  try {
    const query = req.query;
    const number = Number(query.number);
    const page = Number(query.page);
    const listReviewedProfiles = await tutorServices.getAll(number, page, {
      isSubmitted: true,
      status: "reviewed",
    });
    res.status(200).send(listReviewedProfiles);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default getListReviewedProfiles;
