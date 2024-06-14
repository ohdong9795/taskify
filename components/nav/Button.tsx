'use client';

// import Image from 'next/image';
import { forwardRef } from 'react';

interface ButtonProps {
  text: string | null;
  handleClick: () => void;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ text, handleClick, children }, ref) => (
  <button
    ref={ref}
    type="button"
    className="flex items-center gap-[8px] rounded-md border border-gray_D9 py-[11px] px-[16px] text-gray_787486"
    onClick={handleClick}
  >
    {children}
    {text}
  </button>
));

Button.displayName = 'Button';

export default Button;
