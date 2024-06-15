import { useState, useEffect, useCallback } from 'react';
import { getMembers } from '@/services/client/members';
import Image from 'next/image';
import UserImage from '@/public/images/UserImage.svg';
import { Member } from '@/types/user/members';

interface MemberImageProps {
  dashboardId: number;
  nickname: string | undefined;
  isDashboard: boolean;
}

function MembersProfile({ dashboardId, nickname, isDashboard }: MemberImageProps) {
  const [membersData, setMembersData] = useState<Member[] | null>(null);
  const profiles = membersData?.filter((member) => member.nickname !== nickname);

  const fetchMembers = useCallback(async () => {
    const result = await getMembers({ dashboardId });
    const { members } = result;
    setMembersData(members);
  }, [dashboardId]);

  useEffect(() => {
    if (isDashboard) {
      fetchMembers();
    }
  }, [isDashboard, fetchMembers]);

  return (
    <div className="flex items-center">
      {membersData ? (
        profiles?.map((member, index) => (
          <div key={member.id} className={`relative ${index > 0 ? '-ml-3' : ''}`}>
            {member.profileImageUrl ? (
              <Image
                src={member.profileImageUrl}
                alt={member.nickname}
                width={38}
                height={38}
                className="rounded-full border-white border-2"
              />
            ) : (
              <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gray-200 border-2 border-white text-gray-700 font-bold">
                {member.email.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
        ))
      ) : (
        <UserImage />
      )}
    </div>
  );
}

export default MembersProfile;
