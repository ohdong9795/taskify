import { useState, forwardRef } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  usage: 'email' | 'nickName' | 'password' | 'checkbox';
  hasError?: boolean;
}

const layout = 'rounded-lg border border-solid px-[16px] py-[15px] focus:outline-1 focus:outline';
const normal = 'border-gray_D9 focus:outline-violet_5534DA';
const error = 'border-red_D6173A focus:outline-red_D6173A';
const visibleButton = 'absolute top-[13px] right-[18px]';

const inputClassName = (hasError: boolean) => `${layout} ${hasError ? error : normal}`;
const signClassName = (hasError: boolean) => `${inputClassName(hasError)} w-[520px] h-[50px] max-w-full max-h-full`;

const Input = forwardRef<HTMLInputElement, InputProps>(({ usage, hasError = false, ...rest }, ref) => {
  const [passwordType, setPasswordType] = useState<'password' | 'text'>('password');

  const togglePasswordType = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  if (usage === 'email' || usage === 'nickName') {
    return <input ref={ref} className={signClassName(hasError)} {...rest} />;
  }

  if (usage === 'password') {
    return (
      <div className="relative w-[520px] h-[50px] max-w-full max-h-full">
        <input ref={ref} className={signClassName(hasError)} type={passwordType} {...rest} />
        {passwordType === 'password' ? (
          <IoMdEyeOff className={`${visibleButton} w-[24px] h-[24px]`} onClick={togglePasswordType} />
        ) : (
          <IoMdEye className={`${visibleButton} w-[24px] h-[24px]`} onClick={togglePasswordType} />
        )}
      </div>
    );
  }

  if (usage === 'checkbox') {
    return <input ref={ref} type="checkbox" className="w-[20px] h-[20px] rounded-[4px]" {...rest} />;
  }

  return null;
});

Input.displayName = 'Input';

export default Input;
