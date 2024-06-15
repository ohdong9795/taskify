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
    className="py-2 px-4 flex bg-violet_5534DA text-white border border-gray_D9D9D9 rounded-3xl justify-center items-center font-semibold gap-3 mb-4"
    onClick={handleClick}
  >
    {text}
    <div className="w-4 h-4 bg-violet-100 flex justify-center items-center rounded">
      <GoPlus className="text-violet_5534DA" />
    </div>
  </button>
));

ModalOpenButton.displayName = 'ModalOpenButton';

export default ModalOpenButton;
