import parseErrorIntoMessage from "../../../helpers/parseErrorIntoMessage";
import tutorServices from "../services";

const getListReviewedProfiles = async (req, res) => {
  try {
    const query = req.query;
    const number = Number(query.number);
    const page = Number(query.page);
    const listReviewedProfiles = await tutorServices.getAll(number, page, {
      isSubmitted: true,
      status: "reviewed",
    });
    const newList = listReviewedProfiles.map(profile => {
      const { userId, ...newProfile } = profile._doc;
      return {
        ...tutorServices.toDTO(newProfile),
        email: userId.email,
      };
    });
    res.status(200).send(newList);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default getListReviewedProfiles;
