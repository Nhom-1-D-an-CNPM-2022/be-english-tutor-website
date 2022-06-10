import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import tutorServices from "../services";

const updateReviewTutor = async (req, res) => {
  const { user } = req;
  console.log(user);
  const { tutorId, comment, rating } = req.body;

  try {
    const updateReviewing = await tutorServices.updateReviewing(
      tutorId,
      user._id,
      comment,
      rating
    );
    res.status(200).send(updateReviewing);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default updateReviewTutor;
