import express from 'express';
import ReplyController from '../controllers/reply.controller';
import verifyToken from '../middlewares/auth/auth.middleware';
import validate from '../helpers/validator';

const router = express.Router();

router.post('/comments/:commentId/replies',
  verifyToken.verify,
  validate.validateBody(validate.schemas.replySchema),
  ReplyController.addReply);

export default router;