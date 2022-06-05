import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import userServices from "../services";

const getTutors = async (req, res) => {
  try {
    const query = req.query;
    const number = Number(query.number);
    const page = Number(query.page);
    const filter = {
      type: "tutor",
    };

    const tutors = await userServices.getAll(number, page, filter);

    return res.status(200).send(tutors);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default getTutors;
