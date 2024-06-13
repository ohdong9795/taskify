import clientInstance from '@/utils/axiosClient';
import {
  createDashboardCommon,
  getDashboardsCommon,
  getDashboardByIdCommon,
  updateDashboardCommon,
  deleteDashboardCommon,
  inviteDashboardCommon,
  getDashboardInvitationsCommon,
  deleteDashboardInvitationCommon,
} from '../common';

export const createDashboard = (body: { title: string; color?: string }) => createDashboardCommon(clientInstance, body);

export const getDashboards = (query: { navigationMethod: string; cursorId?: number; page?: number; size?: number }) =>
  getDashboardsCommon(clientInstance, query);

export const getDashboardById = (query: { dashboardId: number }) => getDashboardByIdCommon(clientInstance, query);

export const updateDashboard = (body: { dashboardId?: number; title: string; color: string }) =>
  updateDashboardCommon(clientInstance, body);

export const deleteDashboard = (query: { dashboardId: number }) => deleteDashboardCommon(clientInstance, query);

export const inviteDashboard = (body: { dashboardId: number; email: string }) =>
  inviteDashboardCommon(clientInstance, body);

export const getDashboardInvitations = (query: {
  dashboardId: string;
  cursorId?: number;
  page?: number;
  size?: number;
}) => getDashboardInvitationsCommon(clientInstance, query);

export const deleteDashboardInvitation = (query: { dashboardId: number; invitationId: number }) =>
  deleteDashboardInvitationCommon(clientInstance, query);
