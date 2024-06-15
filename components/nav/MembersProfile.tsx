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
  const [isTablet, setIsTablet] = useState<boolean>(false);

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

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize the state

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxVisibleMembers = isTablet ? 4 : 2;

  return (
    <div className="flex items-center">
      {membersData ? (
        <>
          {profiles?.slice(0, maxVisibleMembers).map((member, index) => (
            <div key={member.id} className={`relative ${index > 0 ? '-ml-3' : ''}`}>
              {member.profileImageUrl ? (
                <div className="relative w-[38px] h-[38px]">
                  <Image
                    src={member.profileImageUrl}
                    alt={member.nickname}
                    fill
                    className="rounded-full border-white border-2 object-cover"
                  />
                </div>
              ) : (
                <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gray-200 border-2 border-white text-gray-700 font-bold">
                  {member.email.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          ))}
          {profiles && profiles.length > maxVisibleMembers && (
            <div className="relative -ml-3 flex items-center justify-center rounded-full bg-gray-200 border-2 border-white text-gray-700 font-bold w-[40px] h-[40px]">
              +{profiles.length - maxVisibleMembers}
            </div>
          )}
        </>
      ) : (
        <UserImage />
      )}
    </div>
  );
}

export default MembersProfile;
