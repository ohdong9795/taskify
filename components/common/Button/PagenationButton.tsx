'use client';

import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from './Button';





interface PaginationButtonsProps {
  allPage: number;
  nowPage: number;
  handleBackwardButtonClick: () => void;
  handleForwardButtonClick: () => void;
  isSidebar?: boolean;
  isStart?: boolean;
  isEnd?: boolean;
}

export default function PaginationButtons({
  allPage,
  nowPage,
  handleBackwardButtonClick,
  handleForwardButtonClick,
  isSidebar,
  isStart,
  isEnd
}: PaginationButtonsProps) {
  const contatinerStyle = isSidebar
    ? 'flex tablet:flex-col-reverse items-center desktop:gap-[1.6] tablet:gap-[1.4] gap-[1.2]'
    : 'flex items-center tablet:gap-[1.6] gap-[1.2]';
  const buttonStyle = isSidebar
    ? 'tablet:w-[4] w-[2] tablet:h-[4] h-[2]'
    : 'tablet:w-[4] w-[3.6] tablet:h-[4] h-[3.6]';
  const spanStyle = isSidebar
    ? 'tablet:text-[1.4] hidden tablet:block'
    : 'tablet:text-[1.4] text-[1.2]';

  return (
    <div className={contatinerStyle}>
      <span className={spanStyle}>
        {allPage} 페이지 중 {nowPage}
      </span>
      <div className="flex items-center">
        <Button
          variant="secondary"
          customStyles={
            isStart
              ? `${buttonStyle} rounded-l-[0.4] shadow opacity-30`
              : `${buttonStyle} rounded-l-[0.4] shadow`
          }
          type="button"
          onClick={handleBackwardButtonClick}
        >
          <IoIosArrowBack aria-label="뒤로 가기" />
        </Button>
        <Button
          variant="secondary"
          customStyles={
            isEnd
              ? `${buttonStyle} rounded-r-[0.4] shadow opacity-30`
              : `${buttonStyle} rounded-r-[0.4] shadow`
          }
          type="button"
          onClick={handleForwardButtonClick}
        >
          <IoIosArrowForward aria-label="앞으로 가기" />
        </Button>
      </div>
    </div>
  );
}