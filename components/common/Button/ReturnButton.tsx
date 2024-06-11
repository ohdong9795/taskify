'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { IoIosArrowBack } from "react-icons/io";


export default function ReturnButton() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.back(); // 바로 이전 페이지로 이동
  };

  return (
    <button
      className="flex items-center desktop:text-[1.6] mobile:text-[1.4] font-medium"
      type="button"
      onClick={handleButtonClick}
    >
      <IoIosArrowBack
        className="tablet:w-[2] tablet:h-[2] w-[1.8] h-[1.8]"
        aria-label="뒤로 가기"
      />
      돌아가기
    </button>
  );
}