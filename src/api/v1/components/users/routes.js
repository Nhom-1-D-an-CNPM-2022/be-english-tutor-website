import express from 'express';
import userControllers from './controllers';

const userRoutes = express.Router();

//======================== GET ========================
//======================== POST ========================
userRoutes.post('/register', userControllers.register);
userRoutes.post('/register/google', userControllers.registerGoogle);
//======================== PUT ========================
//======================== DELETE ========================

export default userRoutes;
