'use client';

// '/mydashboard', 'mypage'에서 사용하는 nav입니다.

import { IoMdSettings } from 'react-icons/io';
import { MdOutlineAddBox } from 'react-icons/md';
import Vector from '@/public/images/Vector.svg';
import UserImage from '@/public/images/UserImage.svg';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Dropdown from '../common/Dropdwon';

export default function DashBoardNav() {
  const [title, setTitle] = useState('');
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const pathName = usePathname();
  const isDashboard = pathName.includes('/dashboard');
  const isMyPage = pathName === '/mypage';

  useEffect(() => {
    if (isDashboard) {
      setTitle('store 데이터'); // 채워주세요.
    } else if (isMyPage) {
      setTitle('계정관리');
    } else {
      setTitle('내 대시보드');
    }
  }, [pathName, isDashboard, isMyPage]);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-[70px] bg-white shrink-0 flex self-end justify-between items-center px-[40px] z-50">
      <div className="font-bold hidden md:block">{title}</div>
      <div className="flex flex-row items-center gap-[40px]">
        {isDashboard ? (
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
        ) : null}
        <div className="flex flex-row items-center gap-[32px]">
          {isDashboard ? (
            <>
              <div>초대 멤버 프로필</div>

              <Vector />
            </>
          ) : null}
          <div className="flex flex-row items-center gap-[12px] ">
            {/* 유저 프로필 넣으면 됩니다. */}
            <UserImage />

            <button className="hidden sm:flex" onClick={toggleDropdown}>
              이용자명
            </button>
            {isDropdownVisible && <Dropdown />}
          </div>
        </div>
      </div>
    </nav>
  );
}
