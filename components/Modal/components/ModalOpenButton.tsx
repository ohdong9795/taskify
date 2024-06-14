'use client';

import { forwardRef } from 'react';
import { GoPlus } from 'react-icons/go';

interface ButtonProps {
  text: string | null;
  handleClick: () => void;
}

const ModalOpenButton = forwardRef<HTMLButtonElement, ButtonProps>(({ text, handleClick }, ref) => (
  <button
    ref={ref}
    type="button"
    className="w-80 flex h-10 bg-white border border-gray_D9D9D9 rounded-lg justify-center items-center px-25 py-6 font-semibold text-black_333236 gap-3"
    onClick={handleClick}
  >
    {text}
    <div className="w-5 h-5 bg-violet-100 flex justify-center items-center rounded">
      <GoPlus className="text-violet_5534DA" />
    </div>
  </button>
));

ModalOpenButton.displayName = 'ModalOpenButton';

export default ModalOpenButton;
