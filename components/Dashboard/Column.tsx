'use client';

import { GoDotFill, GoGear } from 'react-icons/go';
import useModal from '@/hooks/useModal';
import { CardData, ColumnType } from '@/types/user/column';
import Modal from '../Modal';
import ColumnEditForm from '../Modal/views/ColumnEditForm';
import ModalOpenButton from '../Modal/components/ModalOpenButton';
import ToDoAddForm from '../Modal/views/ToDoAddForm';
import Card from './Card';

interface ColumnProps {
  data: ColumnType;
  cardsData: CardData | null;
  onUpdate: (id: number, title: string) => void;
  onDelete: (id: number) => void;
  refreshCardAll: () => void;
}

function Column({ data, cardsData, onUpdate, onDelete, refreshCardAll }: ColumnProps) {
  const { modalRef, handleOpenModal, handleCloseModal } = useModal();
  const {
    modalRef: toDoAddModalRef,
    handleOpenModal: handleOpenToDoAddModal,
    handleCloseModal: handleCloseToDoAddModal,
  } = useModal();

  return (
    <div>
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <GoDotFill className="text-violet_5534DA mr-2" />
          <h1 className="text-black_333236 font-bold text-lg mr-3">{data.title}</h1>
          <div className="w-5 h-5 rounded p-3 bg-gray_EE flex justify-center items-center font-medium text-xs text-gray_787486">
            {cardsData?.totalCount ?? 0}
          </div>
        </div>
        <button type="button" aria-label="edit" onClick={handleOpenModal}>
          <GoGear className="text-gray_787486 w-5 h-5" />
        </button>
      </header>
      <ModalOpenButton full handleClick={handleOpenToDoAddModal} text={null} />
      <ol className="overflow-y-scroll w-[284] t:w-full p:w-[314px]" style={{ height: 'calc(100vh - 300px)' }}>
        {cardsData?.cards.map((card) => <Card key={card.id} data={card} refreshCardAll={refreshCardAll} />)}
      </ol>
      <Modal ref={modalRef}>
        <ColumnEditForm
          id={data.id}
          title={data.title}
          handleCloseModal={handleCloseModal}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      </Modal>
      <Modal ref={toDoAddModalRef}>
        <ToDoAddForm columnId={data.id} handleCloseModal={handleCloseToDoAddModal} refreshCardAll={refreshCardAll} />
      </Modal>
    </div>
  );
}

export default Column;
