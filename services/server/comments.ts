import serverInstance from '@/utils/axiosServer';
import { getCommentsCommon } from '../common';

// eslint-disable-next-line import/prefer-default-export
export const getComments = (query: { size?: number; cursorId?: number; cardId: number }) =>
  getCommentsCommon(serverInstance, query);
