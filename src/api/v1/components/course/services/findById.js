import Course from '../model';

const findById = (courseId) => Course.findById(courseId);

export default findById;
