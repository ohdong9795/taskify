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
      customStyles="tablet:w-[12] tablet:h-[4.8] w-[13.8] h-[4.2] rounded-[0.8] text-[#787486] tablet:text-[1.6] text-[1.4]"
      onClick={() => setModal(prev => ({ ...prev, status: false }))}
    >
      {children}
    </Button>
  );
}