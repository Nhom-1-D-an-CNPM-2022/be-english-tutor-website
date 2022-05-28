import getOneByUserId from "./getOneByUserId";

const updateReviewing = async (tutorId, userId, comment, rating) => {
  const tutor = await getOneByUserId(tutorId);
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
