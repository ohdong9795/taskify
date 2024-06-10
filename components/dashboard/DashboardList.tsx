'use client';

import { DashboardData } from '@/types/user/dashboard';
import Button from './Button';

interface DashboardListProp {
  dashboardData: DashboardData;
}

function DashboardList({ dashboardData }: DashboardListProp) {
  const { dashboards } = dashboardData;

  return (
    <main>
      <ul>
        <li>
          <Button text="새로운 대시보드" />
        </li>
        <li>내가 만든 대시보드가 들어갑니다</li>
      </ul>
      <ul>
        {dashboards.map(({ title }) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
    </main>
  );
}

export default DashboardList;
