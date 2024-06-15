import { Invitation } from '@/types/user/dashboard';
import Image from 'next/image';

interface InviteeImageProps {
  invitee: Invitation['invitee'];
}

function InviteeImage({ invitee }: InviteeImageProps) {
  return <Image src={invitee.profileImageUrl} alt={invitee.nickname} />;
}

export default InviteeImage;
