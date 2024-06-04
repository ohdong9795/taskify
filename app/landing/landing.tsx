import MainImage from '@/public/images/MainImage.svg';
import Image from 'next/image';
import Example1 from '@/public/images/Example1.svg';
import Example2 from '@/public/images/Example2.svg';

export default function Lainding() {
  return (
    <div className=" bg-black flex flex-col items-center pt-[164px] w-full">
      <header className="flex flex-col items-center">
        <Image src={MainImage} alt="랜딩페이지 메인이미지" />
        <div className="flex items-center space-x-[28px] mt-[38px]">
          <p className=" text-white text-[76px] font-bold">새로운 일정 관리</p>
          <p className=" text-violet_5534DA text-[76px] font-bold">Taskify</p>
        </div>
        <div className="text-white mt-[24px]">서비스의 메인 설명이 들어갑니다.</div>
        <button
          type="submit"
          className="text-white mt-[66px] w-[280px] pt-[15px] pb-[14px] rounded-[8px] bg-violet_5534DA"
        >
          로그인하기
        </button>
      </header>
      <article className=" mt-[184px] flex flex-col gap-[90px]">
        <section className="bg-black_17 w-[1200px] h-[600px] grid grid-cols-2 grid-rows-4 gap-[60px] items-center pt-[103px] pl-[60px] rounded-[8px]">
          <div className="flex flex-col gap-[100px] col-start-1 row-start-2">
            <h2 className="text-gray_9FA6B2 font-medium text-[22px]">Point 1</h2>
            <div className="text-white text-[48px] font-bold">
              <p>일의 우선순위를 </p>
              <p>관리하세요</p>
            </div>
          </div>
          <div className="col-start-2 row-start-2">
            <Image src={Example1} alt="예시화면 1" />
          </div>
        </section>
        <section className="bg-black_17 w-[1200px] h-[600px] grid grid-cols-2 gap-[60px] items-center pt-[98px] pl-[108px] rounded-[8px]">
          <div>
            <Image src={Example2} alt="예시화면 2" />
          </div>
          <div className="flex flex-col gap-[100px]">
            <h2 className="text-gray_9FA6B2 font-medium text-[22px]">Point 2</h2>
            <div className="text-white text-[48px] font-bold">
              <p>해야 할 일을 </p>
              <p>등록하세요</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
