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

export interface ColumnCard extends ColumnType {
  cards: CardType[];
  totalCount: number;
  cursorId: number | null;
}

export interface Fail {
  message: string;
}
