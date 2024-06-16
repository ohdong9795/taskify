'use client';

import React, { ReactNode } from 'react';

// 타입 정의
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  customStyles?: string;
  isActive?: boolean;
  children?: ReactNode;
  appendix?: ReactNode;
}

export default function Button({
  variant,
  type = 'submit',
  customStyles = '',
  isActive = true,
  appendix,
  children,
  ...rest
}: ButtonProps) {
  const baseStyle = 'flex justify-center items-center';
  const variantStyles = {
    primary: 'bg-violet_5534DA text-white',
    secondary: 'bg-white border border-gray_D9D9D9 text-black_333236',
    ghost: 'bg-transparent border border-gray_D9D9D9 text-black_333236',
  };

  const activeStyle = isActive ? variantStyles[variant] : 'bg-gray_9FA6B2 text-white cursor-not-allowed';

  return (
    <button type={type} className={`${baseStyle} ${activeStyle} ${customStyles}`} {...rest}>
      {children}
      {appendix}
    </button>
  );
}
