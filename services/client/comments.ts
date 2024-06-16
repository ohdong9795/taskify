import clientInstance from '@/utils/axiosClient';
import { createCommentCommon, getCommentsCommon, updateCommentCommon, deleteCommentCommon } from '../common';

export const createComment = (body: { content: string; cardId: number; columnId: number; dashboardId: number }) =>
  createCommentCommon(clientInstance, body);

export const getComments = (query: { size?: number; cursorId?: number; cardId: number }) =>
  getCommentsCommon(clientInstance, query);

export const updateComment = (body: { commentId: number; content: string }) =>
  updateCommentCommon(clientInstance, body);

export const deleteComment = (query: { commentId: number }) => deleteCommentCommon(clientInstance, query);
