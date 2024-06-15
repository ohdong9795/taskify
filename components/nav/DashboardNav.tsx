'use client';

// '/mydashboard', 'mypage'에서 사용하는 nav입니다.

import useModal from '@/hooks/useModal';
import { IoMdSettings } from 'react-icons/io';
import { MdOutlineAddBox } from 'react-icons/md';
import UserImage from '@/public/images/UserImage.svg';
import { usePathname, useRouter } from 'next/navigation';
import { useRef } from 'react';
import useAuthStore from '@/stores/authStore';
import Link from 'next/link';
import useDataStore from '@/stores/dataStore';
import Image from 'next/image';
import MembersProfile from './MembersProfile';
import Dropdown, { DropdownHandle } from '../common/Dropdown';
import Modal from '../Modal';
import Button from './Button';
import InviteForm from '../Modal/views/InviteForm';

export default function DashBoardNav() {
  const { dashboards } = useDataStore();
  const { setLogout, user } = useAuthStore();
  const router = useRouter();
  const pathName = usePathname();
  const { modalRef, handleOpenModal } = useModal();
  const dropdownRef = useRef<DropdownHandle>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dashboardId = parseInt(pathName.slice(11, 15), 10);
  const isDashboard = pathName.includes(`/dashboard/${dashboardId}`);
  const isMyPage = pathName === '/mypage';
  const currentDashboard = dashboards?.find((dashboard) => dashboard.id === dashboardId);

  const toggleDropdown = () => {
    dropdownRef.current?.toggle();
  };

  const handleLogout = () => {
    setLogout();
    router.push('/');
  };

  return (
    <nav className="w-full h-[70px] bg-white shrink-0 flex self-end justify-between items-center px-[40px] border-b border-gray_D9D9D9">
      <div className="hidden font-bold t:block">
        {(isMyPage && '계정관리') || (isDashboard && currentDashboard?.title) || '나의 대시보드'}
      </div>
      <div className="flex flex-row items-center gap-[40px]">
        {isDashboard && (
          <>
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
            <MembersProfile dashboardId={dashboardId} nickname={user?.nickname} isDashboard={isDashboard} />
          </>
        )}
        <div className="flex flex-row items-center gap-[12px] border-l px-8 border-gray_D9D9D9">
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
      <Modal ref={modalRef}>
        <InviteForm dashboardId={dashboardId} />
      </Modal>
    </nav>
  );
}
