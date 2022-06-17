import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";
import TutorService from "../../../domain/tutor/tutor.service";
import Review from "../../../domain/tutor/dto/review.dto";

const updateReviewTutor = async (req, res) => {
  const { user } = req;
  console.log(user);
  const { tutorId, comment, rating } = req.body;

  try {
    const review = new Review(user._id, comment, rating);
    const updateReviewing = await TutorService.addReviewing(tutorId, review);

    res.status(200).send(updateReviewing);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default updateReviewTutor;
