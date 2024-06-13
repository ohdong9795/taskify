'use client';

import { IoIosArrowBack } from 'react-icons/io';

export default function BackIcon() {
  const handleButtonClick = () => {
    router.back();
  };

  return (
    <div className="flex ml-[20px] mt-[20px]">
      <IoIosArrowBack className="w-[20px] h-[20px]" />
      <span className="text-[16px] font-medium text-black_333236">돌아가기</span>
    </div>
  );
}
