'use client';

import { useRef } from 'react';
import Modal, { ModalHandles } from '@/components/Modal';

import { GoDotFill, GoGear } from 'react-icons/go';
import Button from './Button';

import ToDoAddForm from '../Modal/views/ToDoAddForm';

interface ColumnProps {
  title: string;
  count: number;
}

function Column({ title, count }: ColumnProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<ModalHandles>(null);

  const handleOpenModal = () => {
    modalRef.current?.open();
  };

  // const handleCloseModal = () => {
  //   modalRef.current?.close();
  // };

  return (
    <>
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <GoDotFill className="text-violet_5534DA mr-2" />
          <h1 className="text-black_333236 font-bold text-lg mr-3">{title}</h1>
          <div className="w-5 h-5 rounded p-3 bg-gray_EE flex justify-center items-center font-medium text-xs text-gray_787486">
            {count}
          </div>
        </div>
        <button type="button" aria-label="edit">
          <GoGear className="text-gray_787486 w-5 h-5" />
        </button>
      </header>
      <Button text={null} ref={buttonRef} handleClick={handleOpenModal} />
      <ul>
        <li>할 일 카드</li>
      </ul>
      <Modal ref={modalRef}>
        <ToDoAddForm />
      </Modal>
    </>
  );
}

export default Column;
