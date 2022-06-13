import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";
import TutorService from "../../../domain/tutor/tutor.service";
import GetTutorsByCondition from "../../../domain/tutor/dto/getTutorsByCondition.dto";

const getListReviewedProfiles = async (req, res) => {
  try {
    const query = req.query;
    const number = Number(query.number);
    const page = Number(query.page);

    const getTutorsByCondition = new GetTutorsByCondition(number, page, {
      isSubmitted: true,
      status: "reviewed",
    });
    
    const listReviewedProfiles = await TutorService.getTutors(getTutorsByCondition);
    res.status(200).send(listReviewedProfiles);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default getListReviewedProfiles;
