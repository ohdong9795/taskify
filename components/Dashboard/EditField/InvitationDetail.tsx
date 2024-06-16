'use client';

import Modal from '@/components/Modal';
import Title from '@/components/Modal/components/Title';
import InviteForm from '@/components/Modal/views/InviteForm';
import useModal from '@/hooks/useModal';
import { deleteDashboardInvitation, getDashboardInvitations } from '@/services/client/dashboards';
import { Invitation } from '@/types/user/dashboard';
import { useCallback, useEffect, useState } from 'react';

interface InvitationDetailProp {
  dashboardId: number;
}

function InvitationDetail({ dashboardId }: InvitationDetailProp) {
  const { handleOpenModal, handleCloseModal, modalRef } = useModal();
  const [currentInvitations, setCurrentInvitations] = useState<Invitation[]>();

  const fetchInvitations = useCallback(async () => {
    const result = await getDashboardInvitations({ dashboardId });
    const { invitations } = result;

    setCurrentInvitations(invitations);
  }, [dashboardId]);

  useEffect(() => {
    fetchInvitations();
  }, [fetchInvitations]);

  const handleDelete = async (invitationId: number) => {
    await deleteDashboardInvitation({ dashboardId, invitationId });
    fetchInvitations();
  };

  return (
    <section className="max-w-[540px] bg-white p-7 rounded-lg">
      <div className="flex items-center justify-between">
        <Title title="초대 내역" />
        <button
          onClick={handleOpenModal}
          className="bg-violet_5534DA hover:bg-violet-500 text-white rounded-lg py-[14px] px-[46px] text-center"
          type="button"
        >
          초대하기
        </button>
      </div>
      <div className="font-normal text-gray_787486">
        <span>이메일</span>
      </div>
      <ul className="flex flex-col">
        {currentInvitations?.map((invitation) => {
          const { invitee } = invitation;

          return (
            <li
              key={invitee.id}
              className="flex items-center justify-between gap-3 py-6 font-normal border-b text-black_333236"
            >
              <div className="flex items-center gap-5">
                <span className="flex items-center gap-1">{invitee.email}</span>
              </div>
              <button
                type="button"
                className="py-2 text-center border rounded px-7 text-violet_5534DA hover:bg-gray-200"
                onClick={() => handleDelete(invitation.id)}
              >
                취소
              </button>
            </li>
          );
        })}
      </ul>
      <Modal ref={modalRef}>
        <InviteForm dashboardId={dashboardId} handleCloseModal={handleCloseModal} />
      </Modal>
    </section>
  );
}

export default InvitationDetail;
