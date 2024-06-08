'use client';

import LogoImage from '@/public/images/LogoImage.svg';
import Taskify from '@/public/images/Taskify.svg';
import Link from 'next/link';

export default function LandingNav() {
  return (
    <nav className="fixed top-0 left-0 w-full h-[70px] bg-black shrink-0 flex justify-between items-center px-[20px] z-50">
      <div className="flex flex-row">
        <LogoImage className="w-[50px] h-[33px] text-white" />
        <Taskify className="w-[80px] h-[35px] text-white hidden md:block" />
      </div>
      <div className="flex flex-row gap-[36px] sm:gap-[20px]">
        <Link href="/login">
          <div className="text-sm sm:text-base text-white ">로그인</div>
        </Link>
        <Link href="/signup">
          <div className="text-sm sm:text-base text-white ">회원가입</div>
        </Link>
      </div>
    </nav>
  );
}
