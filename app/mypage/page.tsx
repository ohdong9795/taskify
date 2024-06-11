import { IoIosArrowBack } from 'react-icons/io';
import getUserProfile from '@/services/myPageApi/server';
import ImageUploadPreview from '@/components/myPage/Profile/ImageUploadPreview';
import { User } from '@/types/user/user';
import PasswordChangeForm from './passwordChangeForm';

export default async function MyPage() {
  const Profile: User = await getUserProfile();

  return (
    <div>
      <div className="flex">
        <IoIosArrowBack />
        <span>돌아가기</span>
      </div>
      <ImageUploadPreview Profile={Profile} />
      <PasswordChangeForm />
    </div>
  );
}
