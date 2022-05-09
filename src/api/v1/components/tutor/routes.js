import express from 'express';
import verifyToken from '../../middlewares/verifyToken';
import tutorController from './controllers';

const tutorRoutes = express.Router();

//======================== GET ========================
tutorRoutes.get('/', tutorController.getListTutors);
tutorRoutes.get('/search', tutorController.searchAllTutors);
tutorRoutes.get('/profile/:tutorId', tutorController.getProfile);
//======================== POST ========================
tutorRoutes.post('/', tutorController.createNewTutor);
//======================== PUT ========================
tutorRoutes.put('/profile/me', verifyToken, tutorController.updateProfile);
//======================== DELETE ========================

export default tutorRoutes;
