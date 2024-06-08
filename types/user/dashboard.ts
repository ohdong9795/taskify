export interface DashboardData {
  dashboards: [
    {
      id: number;
      title: string;
      color: string;
      userId: number;
      createdAt: string;
      updatedAt: string;
      createdByMe: boolean;
    },
  ];
  totalCount: number;
  cursorId: number | null;
}
