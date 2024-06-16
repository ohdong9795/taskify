import MainImage from '@/public/images/MainImage.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Description() {
  return (
    <header className="flex flex-col items-center">
      <Image src={MainImage} alt="Main Image" />
      <div className="flex flex-col t:flex-row items-center space-x-[28px] mt-[38px]">
        <p className=" text-white text-[76px] font-bold">새로운 일정 관리</p>
        <p className=" text-violet_5534DA text-[76px] font-bold">Taskify</p>
      </div>
      <div className="text-white mt-[24px]">스마트하게 나의 일정을 관리하자!</div>

      <Link href="./login">
        <div className="text-white mt-[66px] w-[280px] pt-[15px] pb-[14px] rounded-lg bg-violet_5534DA text-center">
          로그인하기
        </div>
      </Link>
    </header>
  );
}
