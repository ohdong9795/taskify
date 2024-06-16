'use client';

import Title from '@/components/Modal/components/Title';
import { deleteMember, getMembers } from '@/services/client/members';
import useAuthStore from '@/stores/authStore';
import { Members } from '@/types/user/members';
import { AxiosError } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import CrownLogo from '@/public/images/DashboardCrown.svg';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

interface MemberEditFormProps {
  dashboardId: number;
}

function MemberEditForm({ dashboardId }: MemberEditFormProps) {
  const { user } = useAuthStore();
  const [membersData, setMembersData] = useState<Members | null>(null);
  const [page, setPage] = useState(1);
  const totalPage = membersData && Math.ceil(membersData.totalCount / 4);

  const fetchMembers = useCallback(async () => {
    try {
      const result = await getMembers({ dashboardId, size: 4, page: 1 });

      setMembersData(result);
    } catch (error) {
      throw new AxiosError();
    }
  }, [dashboardId]);

  useEffect(() => {
    fetchMembers();
  }, [fetchMembers]);

  const handleDelete = async (memberId: number) => {
    await deleteMember({ memberId });
    fetchMembers();
  };

  const handlePage = async (direction: string) => {
    let result;

    if (direction === 'back' && page !== 1) {
      setPage(page - 1);
      result = await getMembers({ dashboardId, page: page - 1 });
    }

    if (direction === 'next' && page !== totalPage) {
      setPage(page + 1);
      result = await getMembers({ dashboardId, page: page + 1 });
    }

    setMembersData(result);
  };

  return (
    <section className="max-w-[540px] bg-white p-7 rounded-lg">
      <div className="flex items-center justify-between">
        <Title title="구성원" />
        <div className="flex flex-col-reverse justify-center gap-1 p:justify-end t:flex-row t:justify-end t:items-center">
          <span className="mx-auto text-sm font-normal text-black t:mx-0">
            {totalPage} 페이지 중 {page}
          </span>
          <div className="flex justify-center gap-1 t:justify-end p:justify-end">
            <button
              type="button"
              onClick={() => handlePage('back')}
              disabled={page === 1}
              className="flex items-center justify-center w-10 h-10 text-2xl bg-white border rounded-md border-gray_D9D9D9 text-gray_9FA6B2 hover:bg-gray-200 disabled:bg-gray-300"
            >
              <GoChevronLeft />
            </button>
            <button
              type="button"
              onClick={() => handlePage('next')}
              disabled={page >= totalPage!}
              className="flex items-center justify-center w-10 h-10 text-2xl bg-white border rounded-md border-gray_D9D9D9 text-gray_9FA6B2 hover:bg-gray-200 disabled:bg-gray-300"
            >
              <GoChevronRight />
            </button>
          </div>
        </div>
      </div>
      <div className="font-normal text-gray_787486">
        <span>이름</span>
      </div>
      <ul className="flex flex-col">
        {membersData?.members.map(({ profileImageUrl, nickname, id, userId }) => (
          <li key={id} className="flex items-center justify-between gap-3 py-6 font-normal border-b text-black_333236">
            <div className="flex items-center gap-5">
              {profileImageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={profileImageUrl} alt="profile" className="w-[40px] h-[40px] rounded-full" />
              ) : (
                // 넥스트의 이미지 태그를 넣으면 상태관련 에러가 발생해 일단 기본 이미지 태그 사용했습니다.
                <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gray-200 border-2 border-white text-gray-700 font-bold">
                  {nickname.charAt(0).toUpperCase()}
                </div>
              )}
              <span className="flex items-center gap-1">
                {nickname} {userId === user?.id && <CrownLogo />}
              </span>
            </div>
            {userId === user?.id || (
              <button
                type="button"
                onClick={() => handleDelete(id)}
                className="py-2 text-center border rounded px-7 text-violet_5534DA hover:bg-gray-200"
              >
                삭제
              </button>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MemberEditForm;
