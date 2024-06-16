'use client';

import { forwardRef } from 'react';
import { GoPlus } from 'react-icons/go';

interface ButtonProps {
  text: string | null;
  full?: boolean;
  handleClick: () => void;
}

const ModalOpenButton = forwardRef<HTMLButtonElement, ButtonProps>(({ text, full, handleClick }, ref) => (
  <button
    ref={ref}
    type="button"
    className={`${full ? 'w-full ' : ''}flex items-center justify-center gap-3 px-4 py-2 mx-auto mb-4 font-semibold text-white border t:mx-0 bg-violet_5534DA border-gray_D9D9D9 rounded-3xl hover:bg-violet-500`}
    onClick={handleClick}
  >
    {text}
    <div className="flex items-center justify-center w-4 h-4 rounded bg-violet-100">
      <GoPlus className="text-violet_5534DA" />
    </div>
  </button>
));

ModalOpenButton.displayName = 'ModalOpenButton';

export default ModalOpenButton;
