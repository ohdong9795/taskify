'use client';

import { forwardRef } from 'react';

const layout = 'rounded-lg border border-solid px-[16px] py-[15px] focus:outline-1 focus:outline';
const normal = 'border-gray_D9 focus:outline-violet_5534DA';
const error = 'border-red_D6173A focus:outline-red_D6173A';

const inputClassName = (hasError: boolean) => `${layout} ${hasError ? error : normal}`;
const modalClassName = (hasError: boolean) =>
  `${inputClassName(hasError)} w-[484px] h-[48px] max-md:w-[287px] max-md:h-[42px]`;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string;
  hasError?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ text, type, id, hasError = false, placeholder, ...rest }, ref) => (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-lg font-medium text-black_333236 mb-[10px]">
        {text}
      </label>
      <input ref={ref} type={type} id={id} className={modalClassName(hasError)} placeholder={placeholder} {...rest} />
    </div>
  ),
);

Input.displayName = 'Input';

export default Input;
