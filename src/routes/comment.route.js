import express from 'express';
import CommentController from '../controllers/comment.controller';
import verifyToken from '../middlewares/auth/auth.middleware';
import validate from '../helpers/validator';

const router = express.Router();

router.post('/comments/',
  verifyToken.verify,
  validate.validateBody(validate.schemas.commentSchema),
  CommentController.addComment);

router.get('/comments/',
  CommentController.getComments);

router.get('/comments/:commentId/',
  CommentController.getCommentById);

router.patch('/comments/:commentId',
  verifyToken.verify,
  validate.validateBody(validate.schemas.commentSchema),
  CommentController.editComment);

router.delete('/comments/:commentId/',
  verifyToken.verify,
  CommentController.deleteComment);

export default router;