import Tutor from "../model";

const createNewTutor = async ({ ...tutorInformation }) => {
  const newTutor = new Tutor({ ...tutorInformation });

  await newTutor.save();

  return newTutor;
};

export default createNewTutor;
