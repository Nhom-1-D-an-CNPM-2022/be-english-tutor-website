import parseErrorIntoMessage from '../../../helpers/parseErrorIntoMessage';
import tutorServices from '../services';

function getNumberOfDays(start, end) {
  const date1 = new Date(start);
  const date2 = new Date(end);
  const oneDay = 1000 * 60 * 60 * 24;
  const diffInTime = date2.getTime() - date1.getTime();
  const diffInDays = Math.round(diffInTime / oneDay);
  return diffInDays;
}

const getListTutors = async (req, res) => {
  try {
    const allTutors = await tutorServices.getAll();

    const formattedTutorData = allTutors.map((tutor) => {
      const today = new Date();
      const currentDay =
        today.getMonth() +
        1 +
        '/' +
        today.getDate() +
        '/' +
        today.getFullYear();
      const ageOfAccount = getNumberOfDays(tutor.userId?.createdAt, currentDay);

      return {
        fullname: tutor.displayName,
        hometown: tutor.hometown,
        introduction: tutor.introduction,
        ageOfAccount: ageOfAccount,
      };
    });

    res.status(200).send(formattedTutorData);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default getListTutors;
