export interface Dashboard {
  id: number;
  title: string;
  color: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
}

export interface DashboardData {
  dashboards: Dashboard[];
  totalCount: number;
  cursorId: number | null;
}

export interface Invitee {
  nickname: string;
  email: string;
  id: number;
}

export interface Invitation {
  id: number;
  inviter: {
    nickname: string;
    email: string;
    id: number;
  };
  teamId: string;
  dashboard: {
    title: string;
    id: number;
  };
  invitee: Invitee;
  inviteAccepted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface InvitationData {
  invitations: Invitation[];
  cursorId: number | null;
}
