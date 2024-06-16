import serverInstance from '@/utils/axiosServer';
import { getInvitationsCommon } from '../common';

// eslint-disable-next-line import/prefer-default-export
export const getInvitations = (query: { size?: number; cursorId?: number; title?: string }) =>
  getInvitationsCommon(serverInstance, query);
