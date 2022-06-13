
export default getRating = (reviews) => {
    if (reviews.length !== 0) {
      const sumRating = reviews
        .map((review) => review.rating)
        .reduce((a, b) => a + b);
      const rating = Math.round((sumRating / reviews.length) * 10) / 10;
      return rating;
    }
    return null;
  };