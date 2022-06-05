import mongoose from 'mongoose';

const userFavoriteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  tutors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tutor',
    },
  ],
});

const UserFavorite = mongoose.model('UserFavorite', userFavoriteSchema);

export default UserFavorite;
