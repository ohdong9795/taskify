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
      customStyles="tablet:w-[12rem] tablet:h-[4.8rem] w-[13.8rem] h-[4.2rem] rounded-[0.8rem] text-[#787486] tablet:text-[1.6rem] text-[1.4rem]"
      onClick={() => setModal(prev => ({ ...prev, status: false }))}
    >
      {children}
    </Button>
  );
}