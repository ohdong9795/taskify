'use client';

import { InvitationData } from '@/types/user/dashboard';
import InvitedTable from './InvitedTable';

interface InvitedDashboardsProps {
  invitationData: InvitationData;
}

function InvitedDashboards({ invitationData }: InvitedDashboardsProps) {
  const { invitations } = invitationData;

  return (
    <section>
      <div className="p-7 flex flex-col gap-5">
        <h1 className="font-bold text-2xl text-black_333236">초대받은 대시보드</h1>
        {invitations.length === 0 ? (
          <div>아직 초대받은 대시보드가 없어요</div>
        ) : (
          <>
            <form>
              <input type="text" placeholder="검색" />
            </form>
            <InvitedTable invitations={invitations} />
          </>
        )}
      </div>
    </section>
  );
}

export default InvitedDashboards;
