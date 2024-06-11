import InvitedDashboards from '@/components/Dashboard/InvitedDashboards';
import MyDashboards from '@/components/Dashboard/MyDashboards';
import { getDashboards, getInvitations } from '@/services/dashboardApi/server';
import { DashboardData, InvitationData } from '@/types/user/dashboard';

async function MyDashboardPage() {
  const dashboards: DashboardData = await getDashboards();
  const invitationData: InvitationData = await getInvitations();

  return (
    <main className="p-10 bg-gray_FAFAFA h-screen flex flex-col gap-10">
      <MyDashboards dashboardData={dashboards} />
      <InvitedDashboards invitationData={invitationData} />
    </main>
  );
}

export default MyDashboardPage;
