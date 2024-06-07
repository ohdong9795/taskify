'use client';

import { useRouter } from 'next/navigation';
import { IoClose } from 'react-icons/io5';
import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';

function Modal({ children }: { children: React.ReactNode }) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  const handleModalClose = () => {
    router.back();
  };

  return createPortal(
    <dialog
      onClose={handleModalClose}
      ref={modalRef}
      className="flex items-center justify-center overflow-auto rounded-lg backdrop:bg-black backdrop:bg-opacity-70"
    >
      <div className="relative py-8 bg-white px-7">
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
  );
}

export default Modal;
