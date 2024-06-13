import getUserProfile from '@/services/myPageApi/server';
import ImageUploadPreview from '@/components/myPage/Profile/ImageUploadPreview';
import { User } from '@/types/user/user';
import BackIcon from '@/components/myPage/Profile/BackIcon';
import PasswordChangeForm from './passwordChangeForm';

export default async function MyPage() {
  const Profile: User = await getUserProfile();

  return (
    <div className="bg-gray_D9D9D9 flex flex-col">
      <BackIcon />
      <ImageUploadPreview Profile={Profile} />
      <PasswordChangeForm />
    </div>
  );
}
