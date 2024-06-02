'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="bg-black modal-backdrop bg-opacity-70">
      <dialog ref={dialogRef} className="relative rounded-lg dialog" onClose={onDismiss}>
        <div className="py-8 px-7">{children}</div>
        <button onClick={onDismiss} className="absolute z-10 top-8 right-7 close-button" type="button">
          <IoClose className="w-8 h-8" />
        </button>
      </dialog>
    </div>,
    document.getElementById('modal-root')!
  );
}
