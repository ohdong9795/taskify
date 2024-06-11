'use client';

import React, { PropsWithChildren } from 'react';
import Button from './Button';

interface ModalSubmitButtonProp {
  disabled?: boolean;
  onClick?: () => void;
  customStyles?: string;
}

export default function ModalSubmitButton({
  customStyles,
  children,
  disabled,
  onClick
}: PropsWithChildren<ModalSubmitButtonProp>) {
  return (
    <Button
      variant="primary"
      type="submit"
      customStyles={`tablet:w-[12] tablet:h-[4.8] w-[13.8] h-[4.2] rounded-[0.8] font-medium tablet:text-[1.6] text-[1.4] ${customStyles}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}