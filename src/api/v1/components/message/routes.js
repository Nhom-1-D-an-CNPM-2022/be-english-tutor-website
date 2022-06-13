import express from 'express';
import verifyToken from '../../middlewares/verifyToken';
import messageControllers from './controllers';

const messageRoutes = express.Router();

//======================== GET ========================
messageRoutes.get(
  '/with/:otherUserId',
  verifyToken,
  messageControllers.getWithOtherUser
);
//======================== POST ========================
messageRoutes.post(
  '/with/:otherUserId',
  verifyToken,
  messageControllers.chatWithOther
);
//======================== PUT ========================
//======================== DELETE ========================

export default messageRoutes;
