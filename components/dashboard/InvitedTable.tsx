'use client';

import { updateInvitation } from '@/services/client/invitations';
import { Invitation } from '@/types/user/dashboard';

function InvitedTable({ invitations }: { invitations: Invitation[] }) {
  const handleAccept = (invitationId: number, inviteAccepted: boolean) => {
    updateInvitation({ invitationId, inviteAccepted });
  };

  return (
    <table className="text-left">
      <thead>
        <tr className="text-gray_9FA6B2 font-normal">
          <th>이름</th>
          <th>초대자</th>
          <th>수락 여부</th>
        </tr>
      </thead>
      <tbody>
        {invitations.map(({ inviter, id, dashboard }) => (
          <tr key={id}>
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
