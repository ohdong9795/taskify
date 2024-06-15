'use client';

import { forwardRef } from 'react';

interface ButtonProps {
  text: string | null;
  handleClick: () => void;
}

const ModalActionButton = forwardRef<HTMLButtonElement, ButtonProps>(({ text, handleClick }, ref) => (
  <button
    ref={ref}
    type="button"
    className="text-center w-full py-2 t:px-7 rounded bg-violet_5534DA hover:bg-violet-500 text-white mr-[10px]"
    onClick={handleClick}
  >
    {text}
  </button>
));

ModalActionButton.displayName = 'ModalActionButton';

export default ModalActionButton;
