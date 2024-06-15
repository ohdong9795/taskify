'use client';

import { getInvitations, updateInvitation } from '@/services/client/invitations';
import { Invitation } from '@/types/user/dashboard';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface InvitedTableProp {
  invitations: Invitation[];
  searchedInvitations: Invitation[] | null;
  cursorId: number;
}

function InvitedTable({ invitations, cursorId, searchedInvitations }: InvitedTableProp) {
  const router = useRouter();
  const { ref, inView } = useInView({
    threshold: 0.9,
  });
  const [allInvitations, setAllInvitations] = useState<Invitation[]>(invitations);
  const [newCursorId, setNewCursorId] = useState(cursorId);

  const handleAccept = async (invitationId: number, inviteAccepted: boolean) => {
    await updateInvitation({ invitationId, inviteAccepted });

    router.refresh();
  };

  const handleScroll = useCallback(async () => {
    if (newCursorId) {
      const newData = await getInvitations({ size: 5, cursorId: newCursorId });
      setNewCursorId(newData.cursorId);
      setAllInvitations((prev) => [...prev, ...newData.invitations]);
    }
  }, [newCursorId]);

  useEffect(() => {
    if (inView) {
      handleScroll();
    }
  }, [inView, handleScroll]);

  return (
    <>
      <div className="grid grid-cols-3 font-normal text-ls text-gray_787486">
        <span>이름</span>
        <span>초대자</span>
        <span>수락 여부</span>
      </div>
      <ul className="flex flex-col overflow-scroll border-t-2 border-b-2 scroll-smooth">
        {(searchedInvitations || allInvitations).map(({ inviter, id, dashboard }, index) => (
          <li
            ref={index === allInvitations.length - 1 ? ref : null}
            key={id}
            className="grid items-center grid-cols-3 py-6 font-normal border-b text-black_333236"
          >
            <span>{dashboard?.title}</span>
            <span>{inviter?.nickname}</span>
            <div>
              <button
                type="button"
                onClick={() => handleAccept(id, true)}
                className="py-2 px-7 rounded bg-violet_5534DA hover:bg-violet-500 text-white mr-[10px]"
              >
                수락
              </button>
              <button
                type="button"
                onClick={() => handleAccept(id, false)}
                className="py-2 border rounded px-7 text-violet_5534DA hover:bg-gray-200"
              >
                거절
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default InvitedTable;
