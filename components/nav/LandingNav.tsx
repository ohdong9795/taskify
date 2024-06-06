'use client';

import LogoImage from '@/public/images/LogoImage.svg';
import Taskify from '@/public/images/Taskify.svg';

import { useRouter } from 'next/navigation';

export default function LandingNav() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  };

  const handleSignup = () => {
    router.push('/signup');
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-[70px] bg-black shrink-0 flex justify-between items-center px-[20px] z-50">
      <div className="flex flex-row">
        <LogoImage className="w-[50px] h-[33px] text-white" />
        <Taskify className="w-[80px] h-[35px] text-white hidden md:block" />
      </div>
      <div className="flex flex-row gap-[36px] sm:gap-[20px]">
        <button type="submit" onClick={handleLogin} className="text-sm sm:text-base text-white ">
          로그인
        </button>

        <button type="submit" onClick={handleSignup} className="text-sm sm:text-base text-white ">
          회원가입
        </button>
      </div>
    </nav>
  );
}
