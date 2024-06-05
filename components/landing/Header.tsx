import MainImage from '@/public/images/MainImage.svg';

export default function Description() {
  return (
    <header className="flex flex-col items-center">
      <MainImage />
      <div className="flex items-center space-x-[28px] mt-[38px]">
        <p className=" text-white text-[76px] font-bold">새로운 일정 관리</p>
        <p className=" text-violet_5534DA text-[76px] font-bold">Taskify</p>
      </div>
      <div className="text-white mt-[24px]">서비스의 메인 설명이 들어갑니다.</div>
      <button type="submit" className="text-white mt-[66px] w-[280px] pt-[15px] pb-[14px] rounded-lg bg-violet_5534DA">
        로그인하기
      </button>
    </header>
  );
}
