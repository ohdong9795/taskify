'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { IoClose } from 'react-icons/io5';
import ColumnCard from '../ColumnCard';

const modalContents = {
  basic: '모달 컨텐트',
  card: <ColumnCard />,
};

function Modal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get('modal');
  const pathname = usePathname();

  let content;
  if (modal === 'basic') {
    content = modalContents.basic;
  } else if (modal === 'card') {
    content = modalContents.card;
  }

  return (
    content && (
      <dialog className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full overflow-auto bg-black bg-opacity-50 backdrop-blur">
        <div className="relative p-8 m-auto bg-white rounded-lg">
          <div className="py-8 px-7">{content}</div>
          <Link href={pathname}>
            <button className="absolute top-8 right-7 close-button" type="button">
              <IoClose className="w-8 h-8" />
            </button>
          </Link>
        </div>
      </dialog>
    )
  );
}

export default Modal;
