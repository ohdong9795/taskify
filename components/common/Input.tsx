import { useState } from 'react';
import { PiEyeThin, PiEyeSlashThin } from 'react-icons/pi';

interface InputProps {
  type: 'email' | 'password' | 'modal';
  id?: string;
  hasError?: boolean;
  placeholder?: string;
  onBlur?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const layout = 'rounded-lg border border-solid px-[16px] py-[15px] focus:outline-1 focus:outline';
const normal = 'border-gray_D9 focus:outline-violet_5534DA';
const error = 'border-red_D6173A focus:outline-red_D6173A';
const visibleButton = 'absolute top-[13px] right-[18px]';

const inputClassName = (hasError: boolean) => `${layout} ${hasError ? error : normal}`;
const signClassName = (hasError: boolean) => `${inputClassName(hasError)} w-[520px] h-[50px] max-w-full max-h-full`;
const modalClassName = (hasError: boolean) =>
  `${inputClassName(hasError)} w-[484px] h-[48px] max-md:w-[287px] max-md:h-[42px]`;

export default function Input({ type, id, hasError = false, placeholder, onBlur, onChange, value }: InputProps) {
  const [passwordType, setPasswordType] = useState<'password' | 'text'>('password');

  const togglePasswordType = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  if (type === 'email') {
    return (
      <input
        id={id}
        className={signClassName(hasError)}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
      />
    );
  }

  if (type === 'password') {
    return (
      <div className="relative w-[520px] h-[50px] max-w-full max-h-full">
        <input
          id={id}
          type={passwordType}
          className={signClassName(hasError)}
          placeholder={placeholder}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
        />
        {passwordType === 'password' ? (
          <PiEyeSlashThin className={`${visibleButton} w-[24px] h-[24px]`} onClick={togglePasswordType} />
        ) : (
          <PiEyeThin className={`${visibleButton} w-[24px] h-[24px]`} onClick={togglePasswordType} />
        )}
      </div>
    );
  }

  if (type === 'modal') {
    return (
      <input
        id={id}
        className={modalClassName(hasError)}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
      />
    );
  }

  return null;
}
