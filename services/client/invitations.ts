import clientInstance from '@/utils/axiosClient';
import { getInvitationsCommon, updateInvitationCommon } from '../common';

export const getInvitations = (query: { size?: number; cursorId?: number; title: string }) =>
  getInvitationsCommon(clientInstance, query);

export const updateInvitation = (body: { invitationId: number; inviteAccepted: boolean }) =>
  updateInvitationCommon(clientInstance, body);
