import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
  },
  tutors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tutor',
    },
  ],
});

const Course = mongoose.model('Course', courseSchema);

export default Course;
