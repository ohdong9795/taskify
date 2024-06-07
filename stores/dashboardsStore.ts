import { create } from "zustand";

  export interface Dashboard {
    id: number;
    title: string;
    color: string;
    createdAt: string;
    updatedAt: string;
    createdByMe: boolean;
    userId: number;
  }

  export interface DashboardsStore {
    cursorId: number;
    totalCount: number;
    dashboards: Dashboard[];
  }


export const dashboardsStore = create<DashboardsStore>(() => ({
    cursorId: 1,
    totalCount: 10,
    dashboards: [
      {
        id: 1,
        title: "New Dashboard",
        color: "blue",
        createdAt: "2022-10-10T10:10:10.000Z",
        updatedAt: "2022-10-10T10:10:10.000Z",
        createdByMe: false,
        userId: 2
      }
    ]
}));

// 주스턴드 스는법좀 물어보기
