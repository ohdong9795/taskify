import { useState, useEffect } from 'react';
import { getMembers } from '@/services/client/members';
import Image from 'next/image';
import UserImage from '@/public/images/UserImage.svg';

interface Member {
  id: number;
  userId: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
  isOwner: boolean;
}

interface MembersType {
  members: Member[];
  totalCount: number;
}

interface MemberImageProps {
  dashboardId: number;
  nickname: string | undefined;
}

function MemberImage({ dashboardId, nickname }: MemberImageProps) {
  const [members, setMembers] = useState<MembersType | null>(null);

  useEffect(() => {
    (async () => {
      const result = await getMembers({ dashboardId });
      setMembers(result);
    })();
  }, [dashboardId]);

  return (
    <div className="flex items-center">
      {members ? (
        members.members
          .filter((member) => member.nickname !== nickname)
          .map((member, index) => (
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
                  {member.nickname.charAt(0)}
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

export default MemberImage;
