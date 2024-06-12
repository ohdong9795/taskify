import serverInstance from '@/utils/axiosServer';
import { getMembersCommon } from '../common';

// eslint-disable-next-line import/prefer-default-export
export const getMembers = (query: { page?: number; size?: number; dashboardId: number }) =>
  getMembersCommon(serverInstance, query);
