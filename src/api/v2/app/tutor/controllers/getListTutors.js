import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";
import TutorService from "../../../domain/tutor/tutor.service";
import GetTutorsByCondition from "../../../domain/tutor/dto/getTutorsByCondition.dto";

const getListTutors = async (req, res) => {
  try {
    const getTutorsByCondition = new GetTutorsByCondition();
    const allTutors = await TutorService.getTutors(getTutorsByCondition);

    const formattedTutorData = allTutors.map((tutor) => {
      return {
        fullname: tutor.displayName,
        hometown: tutor.hometown,
        introduction: tutor.introduction,
        ageOfAccount: tutor.ageOfAccount,
        rating: tutor.tutorRating,
        userId: tutor._id,
      };
    });

    res.status(200).send(formattedTutorData);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default getListTutors;
