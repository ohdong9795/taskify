import InvitedDashboards from '@/components/dashboard/InvitedDashboards';
import MyDashboards from '@/components/dashboard/MyDashboards';
import { getDashboards } from '@/services/server/dashboards';
import { getInvitations } from '@/services/server/invitations';
import { DashboardData, InvitationData } from '@/types/user/dashboard';

async function MyDashboardPage() {
  const dashboards: DashboardData = await getDashboards({ navigationMethod: 'infiniteScroll' });
  const invitationData: InvitationData = await getInvitations({});

  return (
    <main className="mt-[70px] p-10 bg-gray_FAFAFA h-screen flex flex-col gap-10">
      <MyDashboards dashboardData={dashboards} />
      <InvitedDashboards invitationData={invitationData} />
    </main>
  );
}

export default MyDashboardPage;
