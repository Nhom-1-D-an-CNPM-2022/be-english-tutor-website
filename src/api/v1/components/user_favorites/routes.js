import express from 'express';
import verifyToken from '../../middlewares/verifyToken';
import userFavoriteControllers from './controllers';

const userFavoriteRoutes = express.Router();

//======================== GET ========================
userFavoriteRoutes.get(
  '/tutors',
  verifyToken,
  userFavoriteControllers.getFavoriteTutors
);
//======================== POST ========================
userFavoriteRoutes.post(
  '/tutor',
  verifyToken,
  userFavoriteControllers.addFavoriteTutor
);
//======================== PUT ========================
//======================== DELETE ========================

export default userFavoriteRoutes;
