import { create } from "zustand";
import axios from 'axios';

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
  fetchDashboards: (page: number) => Promise<void>;
}

export const dashboardsStore = create<DashboardsStore>((set) => ({
  cursorId: 0,
  totalCount: 0,
  dashboards: [],
  fetchDashboards: async (page = 0) => {
    const { data } = await axios.get('/dashboards', {
      params : { page },
    });
    set({
      cursorId: data.cursorId,
      totalCount: data.totalCount,
      dashboards: data.dashboards,
    });
    return data.dashboards;
  },
}));

// 주스탠드 사용법 물어보기.