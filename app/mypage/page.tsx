import getUserProfile from '@/services/server/userProfile';
import ImageUploadPreview from '@/components/MyPage/Profile/ImageUploadPreview';
import { User } from '@/types/user/user';
import BackIcon from '@/components/MyPage/Profile/BackIcon';
import PasswordChangeForm from '@/components/MyPage/Password/PasswordChangeForm';

import SideBar from '@/components/SideBar/SideBar';
import DashBoardNav from '@/components/nav/DashboardNav';

export default async function MyPage() {
  const Profile: User = await getUserProfile();

  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="relative w-full">
        <DashBoardNav />
        <div className="bg-gray_D9D9D9 flex flex-col">
          <BackIcon />
          <ImageUploadPreview Profile={Profile} />
          <PasswordChangeForm />
        </div>
      </div>
    </div>
  );
}
