// '/mydashboard', 'mypage'에서 사용하는 nav입니다.

import Image from 'next/image';
import UserImage from '@/public/images/UserImage.svg';

export default function MyNav() {
  return (
    <nav className="size-full h-[70px] bg-white shrink-0 flex justify-between items-center px-[40px]">
      <div>내 대시보드</div>
      <div className="flex flex-row items-center gap-[12px]">
        {/* 유저 프로필 넣으면 됩니다. */}
        <Image src={UserImage} alt="유저이미지" />

        <div className=" hidden sm:flex">이용자명</div>
      </div>
    </nav>
  );
}
