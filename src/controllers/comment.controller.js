/**
 * /* eslint-disable indent
 *
 * @format
 */

import {
  Comment,
  Reply
} from '../models';

import {
  handleErrorResponse,
  handleSuccessResponse
} from '../helpers/utils';

/**
 * @description Comment Controller
 * @class CommentController
 */
class CommentController {
  /**
   * @description Add Comment method
   * @static
   * @param {object} req
   * @param {object} res
   * @returns {object} Comment
   * @member CommentController
   */
  static async addComment(req, res) {
    try {
      const {
        comment
      } = req.body;
      const userId = req.id;
      const newComment = await Comment.create({
        userId,
        comment,
      });
      return handleSuccessResponse(res, newComment, 201);
    } catch (error) {
      return handleErrorResponse(res, error.message, 403);
    }
  }

  /**
   * @description Edit Comment method
   * @static
   * @param {object} req
   * @param {object} res
   * @returns {object} Comment
   * @member CommentController
   */
  static async editComment(req, res) {
    try {
      const {
        commentId: id
      } = req.params;
      const {
        comment
      } = req.body;

      const found = await Comment.findByPk(id);
      if (!found) {
        return handleErrorResponse(res, 'Comment not found', 404);
      }
      if (found.userId !== req.id) {
        return handleErrorResponse(res, 'Cannot edit this comment');
      }

      await Comment.update({
        comment
      }, {
        where: {
          id,
        },
      });

      return res.status(200).json({
        status: 'success',
        message: 'Comment updated successfully',
      });
    } catch (error) {
      return handleErrorResponse(res, error.message, 403);
    }
  }

  /**
   * @description Get Comment
   * @static
   * @param {object} req
   * @param {object} res
   * @returns {object} Comment
   * @member CommentController
   */
  static async getCommentById(req, res) {
    try {
      const {
        commentId
      } = req.params;
      const id = commentId;
      const replies = await Reply.findAll({
        where: {
          commentId,
        },
      });
      const comment = await Comment.findByPk(id);
      return handleSuccessResponse(res, {
        comment,
        replies
      });
    } catch (error) {
      return handleErrorResponse(res, error.message, 500);
    }
  }


  /**
   * @description Get all Comments
   * @static
   * @param {object} req
   * @param {object} res
   * @returns {object} Comments
   * @member CommentController
   */
  static async getComments(req, res) {
    try {
      const comments = await Comment.findAll();
      return handleSuccessResponse(res, comments);
    } catch (error) {
      return handleErrorResponse(res, error.message, 500);
    }
  }

  /**
   * @description Delete Comment
   * @static
   * @param {object} req
   * @param {object} res
   * @returns {null} void
   * @member CommentController
   */
  static async deleteComment(req, res) {
    try {
      const {
        commentId: id
      } = req.params;

      const comment = await Comment.findByPk(id);
      if (!comment) {
        return handleErrorResponse(res, 'Comment not found', 404);
      }
      if (comment.userId !== req.id) {
        return handleErrorResponse(res, 'Cannot delete this comment');
      }

      await Comment.destroy({
        where: {
          id,
        },
      });
      return res.status(204).json({
        status: 'success',
        message: 'Comment deleted successfully',
      });
    } catch (error) {
      return handleErrorResponse(res, error.message, 500);
    }
  }
}

export default CommentController;