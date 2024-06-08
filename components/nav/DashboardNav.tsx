// '/mydashboard', 'mypage'에서 사용하는 nav입니다.

import { IoMdSettings } from 'react-icons/io';
import { MdOutlineAddBox } from 'react-icons/md';
import Vector from '@/public/images/Vector.svg';
import UserImage from '@/public/images/UserImage.svg';

export default function DashBoardNav() {
  return (
    <nav className="fixed top-0 left-0 size-full h-[70px] bg-white shrink-0 flex justify-between items-center px-[40px] z-50">
      <div>내 대시보드</div>
      <div className="flex flex-row items-center gap-[40px]">
        <div className="flex flex-row items-center gap-[16px]">
          <button
            type="button"
            className="flex items-center gap-[8px] rounded-md border border-gray_D9 py-[11px] px-[16px] text-gray_787486"
          >
            <IoMdSettings className="hidden sm:flex" />
            관리
          </button>
          <button
            type="button"
            className="flex items-center gap-[8px] rounded-md border border-gray_D9 py-[11px] px-[16px] text-gray_787486"
          >
            <MdOutlineAddBox className="hidden sm:flex" />
            초대하기
          </button>
        </div>
        <div className="flex flex-row items-center gap-[32px]">
          {/* 초대받은 멤버 이미지를 넣으면 됩니다. */}
          <div>초대 멤버 프로필</div>

          <Vector />
          <div className="flex flex-row items-center gap-[12px]">
            {/* 유저 프로필 넣으면 됩니다. */}
            <UserImage />
            <div className=" hidden mobile:flex">이용자명</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
