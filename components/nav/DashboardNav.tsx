'use client';

// '/mydashboard', 'mypage'에서 사용하는 nav입니다.

import { IoMdSettings } from 'react-icons/io';
import { MdOutlineAddBox } from 'react-icons/md';
import Vector from '@/public/images/Vector.svg';
import UserImage from '@/public/images/UserImage.svg';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import useAuthStore from '@/stores/authStore';
import Link from 'next/link';
import Dropdown, { DropdownHandle } from '../common/Dropdwon';
import Modal, { ModalHandles } from '../Modal';
import Button from './Button';
import InviteForm from '../Modal/views/InviteForm';

export default function DashBoardNav() {
  const [title, setTitle] = useState('');
  const dropdownRef = useRef<DropdownHandle>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<ModalHandles>(null);
  const pathName = usePathname();
  const dashboardId = parseInt(pathName.slice(11, 15), 10);

  const isDashboard = pathName.includes('/dashboard');
  const isMyPage = pathName === '/mypage';
  const { clearToken, clearUser } = useAuthStore();
  const handleLogout = () => {
    clearToken();
    clearUser();
  };

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
    dropdownRef.current?.toggle();
  };

  const handleOpenModal = () => {
    modalRef.current?.open();
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-[70px] bg-white shrink-0 flex self-end justify-between items-center px-[40px] z-50">
      <div className="font-bold hidden t:block">{title}</div>
      <div className="flex flex-row items-center gap-[40px]">
        {isDashboard ? (
          <div className="flex flex-row items-center gap-[16px]">
            <button
              type="button"
              className="flex items-center gap-[8px] rounded-md border border-gray_D9 py-[11px] px-[16px] text-gray_787486"
            >
              <IoMdSettings className="hidden t:flex" />
              관리
            </button>
            <Button text="초대하기" ref={buttonRef} handleClick={handleOpenModal} />

            <MdOutlineAddBox className="hidden t:flex" />
          </div>
        ) : null}
        <div className="flex flex-row items-center gap-[32px]">
          {isDashboard ? (
            <>
              <div>초대 멤버 프로필</div>

              <Vector />
            </>
          ) : null}
          <div className="flex flex-row items-center gap-[12px]">
            {/* 유저 프로필 넣으면 됩니다. */}
            <UserImage onClick={toggleDropdown} />

            <button className="hidden t:flex" onClick={toggleDropdown}>
              이용자명
            </button>
            <Dropdown ref={dropdownRef}>
              <Link href="/mydashboard" className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                내 대시보드
              </Link>
              <Link href="/mypage" className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                내정보
              </Link>
              {/* 로그아웃 하는 기능 구현 */}
              <button onClick={handleLogout} className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                로그아웃
              </button>
            </Dropdown>
          </div>
        </div>
      </div>
      <Modal ref={modalRef}>
        <InviteForm dashboardId={dashboardId} />
      </Modal>
    </nav>
  );
}
