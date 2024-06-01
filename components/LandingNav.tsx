import LogoImage from '@/public/images/LogoImage.svg';
import Taskify from '@/public/images/Taskify.svg';
import Image from 'next/image';

export default function LandingNav() {
  return (
    <nav className="size-full h-[70px] bg-white shrink-0 flex justify-between items-center px-[20px]">
      <div className="flex flex-row">
        <Image src={LogoImage} alt="logo" />
        <Image src={Taskify} alt="logo" className="hidden sm:flex" />
      </div>
      <div className="flex flex-row gap-[36px] sm:gap-[20px]">
        <div className="text-sm sm:text-base">로그인</div>
        <div className="text-sm sm:text-base">회원가입</div>
      </div>
    </nav>
  );
}
