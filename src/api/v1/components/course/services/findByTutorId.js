import Course from '../model';

const findByTutorId = (tutorId) => Course.find({ tutors: tutorId });

export default findByTutorId;
