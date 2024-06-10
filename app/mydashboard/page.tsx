import DashboardList from '@/components/Dashboard/DashboardList';
import { DashboardData } from '@/types/user/dashboard';
import { cookies } from 'next/headers';

const URL = 'https://sp-taskify-api.vercel.app/5-4/dashboards?navigationMethod=infiniteScroll&page=1&size=10'; // 추후에 환경변수로 사용

async function getDashboards() {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  const response = await fetch(URL, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token?.value}`,
    },
  });
  const json = await response.json();
  return json;
}

async function MyDashboardPage() {
  const dashboards: DashboardData = await getDashboards();
  return <DashboardList dashboardData={dashboards} />;
}

export default MyDashboardPage;
