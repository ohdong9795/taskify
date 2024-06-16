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
    ? 'flex t:flex-col-reverse items-center d:gap-[1.6rem] t:gap-[1.4rem] gap-[1.2rem]'
    : 'flex items-center t:gap-[1.6rem] gap-[1.2rem]';
  const buttonStyle = isSidebar
    ? 't:w-[4rem] w-[2rem] t:h-[4rem] h-[2rem]'
    : 't:w-[4rem] w-[3.6rem] t:h-[4rem] h-[3.6rem]';
  const spanStyle = isSidebar
    ? 't:text-[1.4rem] hidden t:block'
    : 't:text-[1.4rem] text-[1.2rem]';

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
              ? `${buttonStyle} rounded-l-[0.4rem] shadow opacity-30`
              : `${buttonStyle} rounded-l-[0.4rem] shadow`
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
              ? `${buttonStyle} rounded-r-[0.4rem] shadow opacity-30`
              : `${buttonStyle} rounded-r-[0.4rem] shadow`
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