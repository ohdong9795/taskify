import { getDashboards } from '@/services/server/dashboards';
import { DashboardData } from '@/types/user/dashboard';
import MyDashboards from './MyDashboards';

async function DashboardsField() {
  const dashboards: DashboardData = await getDashboards({ navigationMethod: 'infiniteScroll' });

  return <MyDashboards dashboardData={dashboards} />;
}

export default DashboardsField;
