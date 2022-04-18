import Tutor from "../model";

const createNewTutor = (req, res) => {
  // Clear index
  Tutor.collection.dropIndexes(function (err, results) {});

  // Get user._id
  const userId = req.query._id;

  const {
    introduction,
    education,
    experience,
    profession,
    languages,
    teachingStyles,
    certificates,
    interests,
    fullname,
  } = req.body;

  Tutor.create(
    {
      userId,
      introduction,
      education,
      experience,
      profession,
      schedule: "01/01/2000",
      languages,
      teachingStyles,
      certificates,
      interests,
      fullname,
    },
    (err, tutor) => {
      if (err) {
        return res.status(500).json({ message: err });
      }
      let result = (({
        userId,
        introduction,
        education,
        experience,
        profession,
        schedule,
        languages,
        teachingStyles,
        certificates,
        interests,
        fullname,
      }) => ({
        userId,
        introduction,
        education,
        experience,
        profession,
        schedule,
        languages,
        teachingStyles,
        certificates,
        interests,
        fullname,
      }))(tutor);
      res.status(200).json({ payload: result });
    }
  );
};

export default createNewTutor;
