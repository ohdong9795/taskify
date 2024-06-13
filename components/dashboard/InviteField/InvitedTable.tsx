'use client';

import { updateInvitation } from '@/services/client/invitations';
import { Invitation } from '@/types/user/dashboard';
import { useRouter } from 'next/navigation';

interface InvitedTableProp {
  invitations: Invitation[];
}

function InvitedTable({ invitations }: InvitedTableProp) {
  const router = useRouter();

  const handleAccept = async (invitationId: number, inviteAccepted: boolean) => {
    await updateInvitation({ invitationId, inviteAccepted });

    router.refresh();
  };

  return (
    <table className="table-fixed w-full">
      <thead>
        <tr className="text-left text-gray_9FA6B2">
          <th>이름</th>
          <th>초대자</th>
          <th>수락 여부</th>
        </tr>
      </thead>
      <tbody>
        {invitations.map(({ inviter, id, dashboard }) => (
          <tr key={id} className="border-b">
            <th>{dashboard.title}</th>
            <th>{inviter.nickname}</th>
            <th>
              <button type="submit" onClick={() => handleAccept(id, true)}>
                수락
              </button>
              <button type="submit" onClick={() => handleAccept(id, false)}>
                거절
              </button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default InvitedTable;
