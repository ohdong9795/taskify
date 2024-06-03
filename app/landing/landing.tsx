import MainImage from '@/public/images/MainImage.svg';
import Image from 'next/image';

export default function Lainding() {
  return (
    <div className=" bg-black flex  flex-col items-center pt-[164px]">
      <Image src={MainImage} alt="랜딩페이지 메인이미지" />
      <div className="flex items-center space-x-[28px] mt-[38px]">
        <div className=" text-white text-[76px] font-bold">새로운 일정 관리</div>
        <div className=" text-violet_5534DA text-[76px] font-bold">Taskify</div>
      </div>
      <div className="text-white mt-[24px]">서비스의 메인 설명이 들어갑니다.</div>
      <button className="text-white mt-[66px] w-[280px] pt-[15px] pb-[14px] rounded-[8px] bg-violet_5534DA">
        로그인하기
      </button>
    </div>
  );
}
