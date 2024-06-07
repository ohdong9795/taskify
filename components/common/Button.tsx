'use client';

import React, { ReactNode, PropsWithChildren, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { createContext, useState } from 'react';
import Image from 'next/image';

// 타입 정의
export type ButtonType = JSX.IntrinsicElements['button']['type'];
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  variant: ButtonVariant;
  type?: ButtonType;
  customStyles?: string;
  isActive?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onBlur?: () => void;
  prefix?: ReactNode;
  children?: ReactNode;
  appendix?: ReactNode;
}

export default function Button({
  variant,
  type = 'submit',
  customStyles,
  isActive = true,
  disabled = false,
  onClick,
  onBlur,
  prefix,
  children,
  appendix
}: ButtonProps) {
  const baseStyle = `flex justify-center items-center`;
  const variantStyles = {
    primary: 'bg-violet text-white',
    secondary: 'bg-white border border-gray_D9D9D9',
    ghost: 'bg-invisible border border-gray_D9D9D9'
  };
  const activeStyle = isActive
    ? `${variantStyles[variant]}`
    : 'text-white bg-gray_9FA6B2 cursor-not-allowed';

  return (
    <button
      type={type}
      className={`${baseStyle} ${activeStyle} ${customStyles}`}
      disabled={disabled}
      onClick={onClick}
      onBlur={onBlur}
    >
      {prefix}
      {children}
      {appendix}
    </button>
  );
}

// Modal Reset Button
interface ModalResetButtonProp {
  children?: ReactNode;
}

export function ModalResetButton({ children }: ModalResetButtonProp) {
  const [modal, setModal] = useState({ status: true });

  return (
    <Button
      variant="secondary"
      type="reset"
      customStyles="tablet:w-[12rem] tablet:h-[4.8rem] w-[13.8rem] h-[4.2rem] rounded-[0.8rem] text-[#787486] tablet:text-[1.6rem] text-[1.4rem]"
      onClick={() => setModal(prev => ({ ...prev, status: false }))}
    >
      {children}
    </Button>
  );
}

// Modal Submit Button
interface ModalSubmitButtonProp {
  disabled?: boolean;
  onClick?: () => void;
  customStyles?: string;
}

export function ModalSubmitButton({
  customStyles,
  children,
  disabled,
  onClick
}: PropsWithChildren<ModalSubmitButtonProp>) {
  return (
    <Button
      variant="primary"
      type="submit"
      customStyles={`tablet:w-[12rem] tablet:h-[4.8rem] w-[13.8rem] h-[4.2rem] rounded-[0.8rem] font-medium tablet:text-[1.6rem] text-[1.4rem] ${customStyles}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

// Pagination Buttons
interface PaginationButtonsProps {
  allPage: number;
  nowPage: number;
  handleBackwardButtonClick: () => void;
  handleForwardButtonClick: () => void;
  isSidebar?: boolean;
  isStart?: boolean;
  isEnd?: boolean;
}

export function PaginationButtons({
  allPage,
  nowPage,
  handleBackwardButtonClick,
  handleForwardButtonClick,
  isSidebar,
  isStart,
  isEnd
}: PaginationButtonsProps) {
  const contatinerStyle = isSidebar
    ? 'flex tablet:flex-col-reverse items-center desktop:gap-[1.6rem] tablet:gap-[1.4rem] gap-[1.2rem]'
    : 'flex items-center tablet:gap-[1.6rem] gap-[1.2rem]';
  const buttonStyle = isSidebar
    ? 'tablet:w-[4rem] w-[2rem] tablet:h-[4rem] h-[2rem]'
    : 'tablet:w-[4rem] w-[3.6rem] tablet:h-[4rem] h-[3.6rem]';
  const spanStyle = isSidebar
    ? 'tablet:text-[1.4rem] hidden tablet:block'
    : 'tablet:text-[1.4rem] text-[1.2rem]';

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
          <Image src="/images/arrow-backward-white.svg" alt="뒤로 가기 아이콘" />
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
          <Image src="/images/arrow-forward-white.svg" alt="앞으로 가기 아이콘" />
        </Button>
      </div>
    </div>
  );
}

// Return Button
export function ReturnButton() {
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

// Modal Provider (Example)
const ModalContext = createContext<any>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState({ status: true });

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  );
}
