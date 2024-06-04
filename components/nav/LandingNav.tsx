import LogoImage from '@/public/images/LogoImage.svg';
import Taskify from '@/public/images/Taskify.svg';
import Image from 'next/image';

export default function LandingNav() {
  return (
    <nav className="fixed top-0 left-0 w-full h-[70px] bg-black shrink-0 flex justify-between items-center px-[20px] z-50">
      <div className="flex flex-row">
        <Image src={LogoImage} alt="logoimage" />
        <Image src={Taskify} alt="logo" className="hidden mobile:flex" />
      </div>
      <div className="flex flex-row gap-[36px] sm:gap-[20px]">
        <div className="text-sm sm:text-base text-white cursor-pointer">로그인</div>
        <div className="text-sm sm:text-base text-white cursor-pointer">회원가입</div>
      </div>
    </nav>
  );
}
