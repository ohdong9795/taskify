'use client';

import { GoDotFill, GoGear } from 'react-icons/go';
import { useRef } from 'react';
import { ColumnType, MemberData } from '@/types/user/column';
import Modal, { ModalHandles } from '../Modal';
import ColumnEditForm from '../Modal/views/ColumnEditForm';
import ModalOpenButton from '../Modal/components/ModalOpenButton';
import ToDoAddForm from '../Modal/views/ToDoAddForm';

interface ColumnProps {
  id: number;
  dashboardId: number;
  title: string;
  count: number;
  memberData: MemberData;
  handleReload: (col: ColumnType) => void;
  onUpdate: (id: number, title: string) => void;
  onDelete: (id: number) => void;
}

function Column({ id, title, count, onUpdate, onDelete, dashboardId, handleReload, memberData }: ColumnProps) {
  const modalRef = useRef<ModalHandles>(null);
  const toDoAddModalRef = useRef<ModalHandles>(null);

  const handleOpenModal = () => {
    modalRef.current?.open();
  };
  const handleCloseModal = () => {
    modalRef.current?.close();
  };

  const handleOpenToDoAddModal = () => {
    toDoAddModalRef.current?.open();
  };
  const handleCloseToDoAddModal = () => {
    toDoAddModalRef.current?.close();
  };

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
        <button type="button" aria-label="edit" onClick={handleOpenModal}>
          <GoGear className="text-gray_787486 w-5 h-5" />
        </button>
      </header>
      <ModalOpenButton handleClick={handleOpenToDoAddModal} text={null} />
      <Modal ref={modalRef}>
        <ColumnEditForm
          id={id}
          title={title}
          handleCloseModal={handleCloseModal}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      </Modal>
      <Modal ref={toDoAddModalRef}>
        <ToDoAddForm
          columnId={id}
          dashboardId={dashboardId}
          handleCloseModal={handleCloseToDoAddModal}
          handleReload={handleReload}
          memberData={memberData}
        />
      </Modal>
    </>
  );
}

export default Column;
