import serverInstance from '@/utils/axiosServer';
import { getDashboardsCommon, getDashboardByIdCommon, getDashboardInvitationsCommon } from '../common';

export const getDashboards = (query: { navigationMethod: string; cursorId?: number; page?: number; size?: number }) =>
  getDashboardsCommon(serverInstance, query);

export const getDashboardById = (query: { dashboardId: number }) => getDashboardByIdCommon(serverInstance, query);

export const getDashboardInvitations = (query: {
  dashboardId: number;
  cursorId?: number;
  page?: number;
  size?: number;
}) => getDashboardInvitationsCommon(serverInstance, query);
