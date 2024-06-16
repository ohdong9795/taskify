'use client';

import { usePathname, useRouter } from 'next/navigation';
import DashboardEditForm from '@/components/Dashboard/EditField/DashboardEditForm';
import InvitationDetail from '@/components/Dashboard/EditField/InvitationDetail';
import MemberEditForm from '@/components/Dashboard/EditField/MemberEditForm';
import { GoChevronLeft } from 'react-icons/go';
import useDataStore from '@/stores/dataStore';
import { deleteDashboard } from '@/services/client/dashboards';

function EditField() {
  const { dashboards } = useDataStore();
  const router = useRouter();
  const pathName = usePathname();
  const dashboardId = parseInt(pathName.slice(11, 15), 10);
  const currentDashboard = dashboards?.find((dashboard) => dashboard.id === dashboardId);

  const handleRoute = () => {
    router.back();
  };

  const handleDashboardDelete = async () => {
    await deleteDashboard({ dashboardId });
    router.push('/mydashboard');
    router.refresh();
  };

  return (
    <main className="px-10 pb-10 bg-gray_FAFAFA h-full flex flex-col overflow-scroll gap-10 w-full pt-[110px]">
      <button type="button" className="flex items-center" onClick={handleRoute}>
        <GoChevronLeft className="w-5 h-5 mr-1" />
        돌아가기
      </button>
      <DashboardEditForm dashboard={currentDashboard} dashboardId={dashboardId} />
      <MemberEditForm dashboardId={dashboardId} />
      <InvitationDetail dashboardId={dashboardId} />
      <div>
        <button
          type="button"
          className="flex px-24 py-5 text-center border rounded-lg border-red_D6173A text-red_D6173A hover:bg-red_D6173A hover:text-white"
          onClick={handleDashboardDelete}
        >
          대시보드 삭제하기
        </button>
      </div>
    </main>
  );
}

export default EditField;
