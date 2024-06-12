'use client';

import { IoClose } from 'react-icons/io5';
import { createPortal } from 'react-dom';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

interface ModalProp {
  children: React.ReactNode;
}

export interface ModalHandles {
  open: () => void;
  close: () => void;
}

const Modal = forwardRef<ModalHandles, ModalProp>(({ children }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      setIsOpen(true);
    },
    close: () => {
      setIsOpen(false);
    },
  }));

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    isOpen &&
    createPortal(
      <dialog
        ref={dialogRef}
        className="w-full h-full flex items-center justify-center overflow-auto bg-black bg-opacity-70 z-100"
        open
      >
        <div className="relative py-8 bg-white px-7 rounded-lg">
          <div>{children}</div>
          <button
            onClick={handleModalClose}
            className="absolute top-8 right-7 close-button"
            type="button"
            aria-label="close"
          >
            <IoClose className="w-8 h-8" />
          </button>
        </div>
      </dialog>,
      document.getElementById('modal-root')!,
    )
  );
});

Modal.displayName = 'Modal';

export default Modal;
