import getUserProfile from '@/services/server/userProfile';
import { User } from '@/types/user/user';
import BackIcon from '@/components/myPage/Profile/BackIcon';
import ImageUploadPreview from '@/components/myPage/Profile/ImageUploadPreview';
import PasswordChangeForm from '@/components/myPage/Password/PasswordChangeForm';

export default async function MyPage() {
  const Profile: User = await getUserProfile();

  return (
    <div className="flex flex-col h-full bg-gray_FAFAFA">
      <BackIcon />
      <ImageUploadPreview Profile={Profile} />
      <PasswordChangeForm />
    </div>
  );
}
