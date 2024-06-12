import axios, { AxiosInstance, AxiosError } from 'axios';
import buildQueryString from '@/utils/queryString';

// Auth
export const loginCommon = async ({ email, password }: { email: string; password: string }) => {
  try {
    const response = await axios.post('/api/login', { email, password });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new AxiosError(error.response.data.message);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

export const updatePasswordCommon = async (
  instance: AxiosInstance,
  body: { password: string; newPassword: string },
) => {
  try {
    const response = await instance.put('/auth/password', body);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

// Cards
export const createCardCommon = async (
  instance: AxiosInstance,
  body: {
    assigneeUserId: number;
    dashboardId: number;
    columnId: number;
    title: string;
    description: string;
    dueDate: string;
    tags: string[];
    imageUrl: string;
  },
) => {
  try {
    const response = await instance.post('/cards', body);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

export const getCardsCommon = async (
  instance: AxiosInstance,
  query: { size?: number; cursorId?: number; columnId: number },
) => {
  try {
    const queryString = buildQueryString(query);
    const response = await instance.get(`/cards${queryString}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

export const updateCardCommon = async (
  instance: AxiosInstance,
  body: {
    columnId: number;
    assigneeUserId: number;
    title: string;
    description: string;
    dueDate: string;
    tags: string[];
    imageUrl: string;
  },
) => {
  try {
    const response = await instance.put(`/cards/${body.columnId}`, body);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

export const getCardByIdCommon = async (instance: AxiosInstance, { cardId }: { cardId: number }) => {
  try {
    const response = await instance.get(`/cards/${cardId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

export const deleteCardByIdCommon = async (instance: AxiosInstance, { cardId }: { cardId: number }) => {
  try {
    const response = await instance.delete(`/cards/${cardId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

// Columns
export const createColumnCommon = async (instance: AxiosInstance, body: { title: number; dashboardId: number }) => {
  try {
    const response = await instance.post('/columns', body);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

export const getColumnsCommon = async (instance: AxiosInstance, query: { dashboardId: number }) => {
  try {
    const queryString = buildQueryString(query);
    const response = await instance.get(`/columns${queryString}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

export const updateColumnCommon = async (instance: AxiosInstance, body: { columnId: number; title: string }) => {
  try {
    const response = await instance.put(`/columns/${body.columnId}`, { title: body.title });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

export const deleteColumnCommon = async (instance: AxiosInstance, { columnId }: { columnId: number }) => {
  try {
    const response = await instance.delete(`/columns/${columnId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

// Comments
export const createCommentCommon = async (
  instance: AxiosInstance,
  body: {
    content: string;
    cardId: number;
    columnId: number;
    dashboardId: number;
  },
) => {
  try {
    const response = await instance.post('/comments', body);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

export const getCommentsCommon = async (
  instance: AxiosInstance,
  query: { size?: number; cursorId?: number; cardId: number },
) => {
  try {
    const queryString = buildQueryString(query);
    const response = await instance.get(`/comments${queryString}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

export const updateCommentCommon = async (instance: AxiosInstance, body: { commentId: number; content: string }) => {
  try {
    const response = await instance.put(`/comments/${body.commentId}`, { content: body.content });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

export const deleteCommentCommon = async (instance: AxiosInstance, { commentId }: { commentId: number }) => {
  try {
    const response = await instance.delete(`/comments/${commentId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

// Dashboards
export const createDashboardCommon = async (instance: AxiosInstance, body: { title: string; color?: string }) => {
  try {
    const response = await instance.post('/dashboards', body);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

export const getDashboardsCommon = async (
  instance: AxiosInstance,
  query: {
    navigationMethod: string;
    cursorId?: number;
    page?: number;
    size?: number;
  },
) => {
  try {
    const queryString = buildQueryString(query);
    const response = await instance.get(`/dashboards${queryString}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

export const getDashboardByIdCommon = async (instance: AxiosInstance, query: { dashboardId: number }) => {
  try {
    const queryString = buildQueryString(query);
    const response = await instance.get(`/dashboards${queryString}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

export const updateDashboardCommon = async (
  instance: AxiosInstance,
  body: { dashboardId: number; title: number; color: string },
) => {
  try {
    const response = await instance.put(`/dashboards/${body.dashboardId}`, {
      title: body.title,
      color: body.color,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

export const deleteDashboardCommon = async (instance: AxiosInstance, { dashboardId }: { dashboardId: number }) => {
  try {
    const response = await instance.delete(`/dashboards/${dashboardId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

export const inviteDashboardCommon = async (instance: AxiosInstance, body: { dashboardId: number; email: string }) => {
  try {
    const response = await instance.post(`/dashboards/${body.dashboardId}/invitations`, { email: body.email });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

export const getDashboardInvitationsCommon = async (
  instance: AxiosInstance,
  { dashboardId, cursorId, page, size }: { dashboardId: string; cursorId?: number; page?: number; size?: number },
) => {
  try {
    const queryString = buildQueryString({ cursorId, page, size });
    const response = await instance.get(`/dashboards/${dashboardId}/invitations/${queryString}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

export const deleteDashboardInvitationCommon = async (
  instance: AxiosInstance,
  { dashboardId, invitationId }: { dashboardId: number; invitationId: number },
) => {
  try {
    const response = await instance.delete(`/dashboards/${dashboardId}/invitations/${invitationId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

// Invitations
export const getInvitationsCommon = async (
  instance: AxiosInstance,
  query: { size?: number; cursorId?: number; title: string },
) => {
  try {
    const queryString = buildQueryString(query);
    const response = await instance.get(`/invitations${queryString}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

export const updateInvitationCommon = async (
  instance: AxiosInstance,
  body: { invitationId: number; inviteAccepted: boolean },
) => {
  try {
    const response = await instance.put(`/invitations/${body.invitationId}`, {
      inviteAccepted: body.inviteAccepted,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

// Members
export const getMembersCommon = async (
  instance: AxiosInstance,
  query: { page?: number; size?: number; dashboardId: number },
) => {
  try {
    const queryString = buildQueryString(query);
    const response = await instance.get(`/members${queryString}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

export const deleteMemberCommon = async (instance: AxiosInstance, { memberId }: { memberId: number }) => {
  try {
    const response = await instance.delete(`/members/${memberId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

// Users
export const createUserCommon = async (
  instance: AxiosInstance,
  body: { email: string; nickname: string; password: string },
) => {
  try {
    const response = await instance.post('/users', body);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

export const getUserCommon = async (instance: AxiosInstance) => {
  try {
    const response = await instance.get('/users/me');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

export const updateUserCommon = async (
  instance: AxiosInstance,
  body: { nickname: number; profileImageUrl: string },
) => {
  try {
    const response = await instance.put('/users/me', body);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};
