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
 * @description Reply Controller
 * @class ReplyController
 */
class ReplyController {
  /**
   * @description Add Reply method
   * @static
   * @param {object} req
   * @param {object} res
   * @returns {object} Reply
   * @member ReplyController
   */
  static async addReply(req, res) {
    try {
      const {
        reply
      } = req.body;
      const {
        commentId
      } = req.params;

      const id = commentId;
      const userId = req.id;

      const comment = await Comment.findByPk(id);

      if (!comment) {
        return handleErrorResponse(res, 'Comment not found', 404);
      }
      const newReply = await Reply.create({
        userId,
        commentId,
        reply,
      });
      return handleSuccessResponse(res, newReply, 201);
    } catch (error) {
      return handleErrorResponse(res, error.message, 403);
    }
  }
}

export default ReplyController;