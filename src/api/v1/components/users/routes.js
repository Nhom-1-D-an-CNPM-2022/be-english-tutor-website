import express from 'express';
import userControllers from './controllers';

const userRoutes = express.Router();

//======================== GET ========================
//======================== POST ========================
userRoutes.post('/register', userControllers.register);
//======================== PUT ========================
//======================== DELETE ========================

export default userRoutes;
