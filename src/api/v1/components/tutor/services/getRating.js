const getRating = (reviews) => {
  let sum = 0;
  reviews.forEach((review) => {
    sum += review.rating;
  });
  const rating = Math.round((sum / reviews.length) * 10) / 10;
  return rating;
};
export default getRating;
