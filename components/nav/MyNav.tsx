// '/mydashboard', 'mypage'에서 사용하는 nav입니다.

import UserImage from '@/public/images/UserImage.svg';

export default function MyNav() {
  return (
    <nav className="fixed top-0 left-0 z-50 size-full h-[70px] bg-white shrink-0 flex justify-between items-center px-[40px]">
      <div>내 대시보드</div>
      <div className="flex flex-row items-center gap-[12px]">
        {/* 유저 프로필 넣으면 됩니다. */}
        <UserImage />

        <div className=" hidden mobile:flex">이용자명</div>
      </div>
    </nav>
  );
}
