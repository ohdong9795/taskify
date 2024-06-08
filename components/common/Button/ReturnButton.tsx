'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ReturnButton() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.back(); // 바로 이전 페이지로 이동
  };

  return (
    <button
      className="flex items-center desktop:text-[1.6rem] mobile:text-[1.4rem] font-medium"
      type="button"
      onClick={handleButtonClick}
    >
      <Image
        className="tablet:w-[2rem] tablet:h-[2rem] w-[1.8rem] h-[1.8rem]"
        src="/images/arrow-backward-black.svg"
        alt="뒤로가기 아이콘"
      />
      돌아가기
    </button>
  );
}