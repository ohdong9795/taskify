'use client';

// '/mydashboard', 'mypage'에서 사용하는 nav입니다.

import { IoMdSettings } from 'react-icons/io';
import { MdOutlineAddBox } from 'react-icons/md';
import Vector from '@/public/images/Vector.svg';
import UserImage from '@/public/images/UserImage.svg';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import useAuthStore from '@/stores/authStore';
import Link from 'next/link';
import axios from 'axios';
import useDataStore from '@/stores/dataStore';
import Image from 'next/image';
import MemberImage from './MemberImage';
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
  const router = useRouter();
  const { dashboards } = useDataStore();

  const isDashboard = pathName.includes(`/dashboard/${dashboardId}`);
  const isMyPage = pathName === '/mypage';

  const findDashboard = dashboards?.find((dashboard) => dashboard.id === dashboardId);

  const { clearToken, clearUser, user } = useAuthStore();
  const handleLogout = () => {
    clearToken();
    clearUser();
    localStorage.clear();
    axios.get('/api/logout');
    router.push('/');
  };

  useEffect(() => {
    if (isDashboard) {
      setTitle(findDashboard?.title ?? '');
    } else if (isMyPage) {
      setTitle('계정관리');
    } else {
      setTitle('내 대시보드');
    }
  }, [pathName, isDashboard, isMyPage, findDashboard]);

  const toggleDropdown = () => {
    dropdownRef.current?.toggle();
  };

  const handleOpenModal = () => {
    modalRef.current?.open();
  };

  return (
    <nav className="w-full h-[70px] bg-white shrink-0 flex self-end justify-between items-center px-[40px]">
      <div className="font-bold hidden t:block">{title}</div>
      <div className="flex flex-row items-center gap-[40px]">
        {isDashboard ? (
          <div className="flex flex-row items-center gap-[16px]">
            <Link
              href={`/dashboard/${dashboardId}/edit`}
              className="flex items-center gap-[8px] rounded-md border border-gray_D9 py-[11px] px-[16px] text-gray_787486"
            >
              <IoMdSettings className="hidden t:flex" />
              관리
            </Link>
            <Button text="초대하기" ref={buttonRef} handleClick={handleOpenModal}>
              <MdOutlineAddBox className="hidden t:flex" />
            </Button>
          </div>
        ) : null}
        <div className="flex flex-row items-center gap-[32px]">
          {isDashboard ? (
            <>
              <MemberImage dashboardId={dashboardId} nickname={user?.nickname} />

              <Vector />
            </>
          ) : null}
          <div className="flex flex-row items-center gap-[12px]">
            <div>
              {user?.profileImageUrl ? (
                <Image
                  src={user?.profileImageUrl}
                  width={38}
                  height={38}
                  alt="사용자 이미지"
                  className="rounded-full "
                  onClick={toggleDropdown}
                />
              ) : (
                <UserImage onClick={toggleDropdown} />
              )}
            </div>

            <button className="hidden t:flex" onClick={toggleDropdown}>
              {user?.nickname}
            </button>
            <Dropdown ref={dropdownRef}>
              <Link href="/mydashboard" className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                내 대시보드
              </Link>
              <Link href="/mypage" className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                내정보
              </Link>
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
