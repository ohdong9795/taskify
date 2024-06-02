'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';

function Modal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleClose() {
    router.back();
  }

  return mounted
    ? createPortal(
        <div className="fixed flex items-center justify-center w-full h-full bg-black modal-backdrop bg-opacity-70">
          <div className="relative bg-white rounded-lg">
            <div className="py-8 px-7">{children}</div>
            <button onClick={handleClose} className="absolute z-10 top-8 right-7 close-button" type="button">
              <IoClose className="w-8 h-8" />
            </button>
          </div>
        </div>,
        document.getElementById('modal-root')
      )
    : null;
}

export default Modal;
