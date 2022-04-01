import userServices from '../services';

const searchAllTutors = async (req, res) => {
  const { skip, limit, query, sortBy, order } = req.query;
  try {
    const tutors = await userServices.searchAllTutors({
      skip,
      limit,
      query,
      sortBy,
      order,
    });
    res.status(200).send(tutors);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};

export default searchAllTutors;