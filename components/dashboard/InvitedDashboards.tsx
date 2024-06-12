'use client';

import { InvitationData } from '@/types/user/dashboard';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import EmptyInvite from '@/public/images/EmptyInvite.svg';
import InvitedTable from './InvitedTable';

interface InvitedDashboardsProps {
  invitationData: InvitationData;
}

function InvitedDashboards({ invitationData }: InvitedDashboardsProps) {
  const { invitations } = invitationData;

  return (
    <section>
      <div className="p-7 flex flex-col gap-5 w-full bg-white rounded-lg">
        <h1 className="font-bold text-2xl text-black_333236">초대받은 대시보드</h1>
        {invitations.length === 0 ? (
          <div className="flex flex-col justify-center items-center m-32">
            <EmptyInvite />
            <span className="text-gray_9FA6B2 mt-3">아직 초대받은 대시보드가 없어요</span>
          </div>
        ) : (
          <>
            <form className="w-full relative">
              <input
                type="search"
                placeholder="검색"
                className="w-full px-11 py-3 border rounded-md text-gray_9FA6B2"
              />
              <button type="submit" className="absolute left-4 top-3.5">
                <FaMagnifyingGlass />
              </button>
            </form>
            <InvitedTable invitations={invitations} />
          </>
        )}
      </div>
    </section>
  );
}

export default InvitedDashboards;
