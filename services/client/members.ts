import clientInstance from '@/utils/axiosClient';
import { getMembersCommon, deleteMemberCommon } from '../common';

export const getMembers = (query: { page?: number; size?: number; dashboardId: number }) =>
  getMembersCommon(clientInstance, query);

export const deleteMember = (query: { memberId: number }) => deleteMemberCommon(clientInstance, query);
