export interface User {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface Assignee {
  profileImageUrl: string;
  nickname: string;
  id: number;
}