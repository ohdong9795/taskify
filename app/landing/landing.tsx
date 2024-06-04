import MainImage from '@/public/images/MainImage.svg';
import Image from 'next/image';
import Example1 from '@/public/images/Example1.svg';
import Example2 from '@/public/images/Example2.svg';
import Description01 from '@/public/images/Description01.svg';
import Description02 from '@/public/images/Description02.svg';
import Description03 from '@/public/images/Description03.svg';

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
          className="text-white mt-[66px] w-[280px] pt-[15px] pb-[14px] rounded-lg bg-violet_5534DA"
        >
          로그인하기
        </button>
      </header>
      <article className=" mt-[184px] flex flex-col gap-[90px]">
        <section className="bg-black_17 w-[1200px] h-[600px] grid grid-cols-2 grid-rows-4 gap-[60px] items-center pt-[103px] pl-[60px] rounded-lg">
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
        <section className="bg-black_17 w-[1200px] h-[600px] grid grid-cols-2 gap-[60px] items-center pt-[98px] pl-[108px] rounded-lg">
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
      <article className="flex flex-col pt-[90px] gap-[36px] pb-[160px]">
        <div className="text-white font-bold text-[28px] ">생산성을 높이는 다양한 설정 ⚡️</div>
        <div className="flex gap-[33px]">
          <div className="flex flex-col ">
            <div className="rounded-t-lg bg-black_4B w-[378px] h-[260px] flex items-center justify-center">
              <Image src={Description01} alt="설명1" className=" items-center" />
            </div>
            <div className="bg-black_17 text-white flex flex-col gap-[18px] p-[33px]">
              <div className="font-bold">대시보드 설정</div>
              <div>대시보드 사진과 이름을 변경할 수 있어요.</div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="rounded-t-lg bg-black_4B w-[378px] h-[260px] flex items-center justify-center">
              <Image src={Description02} alt="설명1" className=" items-center" />
            </div>
            <div className="bg-black_17 text-white flex flex-col gap-[18px] p-[33px]">
              <div className="font-bold">초대</div>
              <div>새로운 팀원을 초대할 수 있어요.</div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="rounded-t-lg bg-black_4B w-[378px] h-[260px] flex items-center justify-center">
              <Image src={Description03} alt="설명1" className=" items-center" />
            </div>
            <div className="bg-black_17 text-white flex flex-col gap-[18px] p-[33px]">
              <div className="font-bold">구성워</div>
              <div>구성원을 초대하고 내보낼 수 있어요.</div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
