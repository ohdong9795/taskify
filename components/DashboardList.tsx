'use client';

import { DashboardData } from '@/types/user/dashboard';

interface DashboardListProp {
  dashboardData: DashboardData;
}

function DashboardList({ dashboardData }: DashboardListProp) {
  const { dashboards } = dashboardData;

  return (
    <ul>
      {dashboards.map(({ title }) => (
        <li key={title}>{title}</li>
      ))}
    </ul>
  );
}

export default DashboardList;
