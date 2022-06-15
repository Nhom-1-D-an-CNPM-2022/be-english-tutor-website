import getOneByUserId from "./getOneByUserId";
import getOne from "./getOne";
const updateReviewing = async (tutorId, userId, comment, rating) => {
  const tutor = await getOne(tutorId);
  const review = {
    userId: userId,
    comment: comment,
    rating: rating,
  };
  tutor.reviewing.push(review);
  tutor.save();

  return tutor;
};

export default updateReviewing;
