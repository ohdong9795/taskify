'use client';

import React, { ReactNode, useState } from 'react';
import Button from './Button';

interface ModalResetButtonProp {
  children?: ReactNode;
}

export default function ModalResetButton({ children }: ModalResetButtonProp) {
  const [, setModal] = useState({ status: true });

  return (
    <Button
      variant="secondary"
      type="reset"
      customStyles="t:w-[12rem] t:h-[4.8rem] w-[13.8rem] h-[4.2rem] rounded-[0.8rem] text-[#787486] t:text-[1.6rem] text-[1.4rem]"
      onClick={() => setModal(prev => ({ ...prev, status: false }))}
    >
      {children}
    </Button>
  );
}