export interface ColumnType {
  id: number;
  title: string;
  teamId: string;
  dashboardId: number;
  createdAt: string;
  updatedAt: string;
}

export interface ColumnData {
  result: string;
  data: ColumnType[];
}

export interface CardType {
  id: number;
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
  assignee: {
    profileImageUrl: string;
    nickname: string;
    id: number;
  };
  imageUrl: string;
  teamId: string;
  columnId: number;
  createdAt: string;
  updatedAt: string;
}

export interface CardData {
  cursorId: number;
  totalCount: number;
  cards: CardType[];
}

export interface Fail {
  message: string;
}

export interface MemberType {
  id: number;
  userId: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
  isOwner: boolean;
}

export interface MemberData {
  members: MemberType[];
  totalCount: number;
}
