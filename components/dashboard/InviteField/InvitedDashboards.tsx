'use client';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Invitation, InvitationData } from '@/types/user/dashboard';
import EmptyInvite from '@/public/images/EmptyInvite.svg';
import { getInvitations } from '@/services/client/invitations';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import InvitedTable from './InvitedTable';

interface InvitedDashboardsProps {
  invitationData: InvitationData;
}

function InvitedDashboards({ invitationData }: InvitedDashboardsProps) {
  const { invitations, cursorId } = invitationData;
  const { handleSubmit, register } = useForm<{ search: string }>();
  const [searchedInvitations, setSearchedInvitations] = useState<Invitation[] | null>(null);

  const handleSearch: SubmitHandler<{ search: string }> = async (formData) => {
    if (formData.search.trim() === '') {
      // 검색어가 없는 경우, 전체 초대 목록을 보여줌
      setSearchedInvitations(null);
    } else {
      // 검색어가 있는 경우, 검색 결과를 가져와서 보여줌
      const searchedData = await getInvitations({ title: formData.search });
      setSearchedInvitations(searchedData.invitations);
    }
  };

  return (
    <section>
      <div className="p-7 flex flex-col gap-5 w-full h-[600px] max-w-[1024px] bg-white rounded-lg">
        <h1 className="text-2xl font-bold text-black_333236">초대받은 대시보드</h1>
        {invitations.length > 0 ? (
          <>
            <form className="relative w-full" onSubmit={handleSubmit(handleSearch)}>
              <input
                type="search"
                placeholder="검색"
                className="w-full py-3 border rounded-md px-11 text-gray_9FA6B2"
                {...register('search')}
              />
              <button type="submit" className="absolute left-4 top-3.5">
                <FaMagnifyingGlass />
              </button>
            </form>
            <InvitedTable invitations={invitations} searchedInvitations={searchedInvitations} cursorId={cursorId} />
          </>
        ) : (
          <div className="flex flex-col items-center justify-center m-32">
            <EmptyInvite />
            <span className="mt-3 text-gray_9FA6B2">아직 초대받은 대시보드가 없어요</span>
          </div>
        )}
      </div>
    </section>
  );
}

export default InvitedDashboards;
