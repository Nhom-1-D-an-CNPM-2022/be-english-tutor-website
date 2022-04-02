import Tutor from "../model";

const getListTutors = (req, res) => {
  Tutor.find({}, (err, tutors) => {
    if (err) {
      return res.status(500).json({ message: e });
    }
    return res.status(200).json(tutors);
  });
};

export default getListTutors;
