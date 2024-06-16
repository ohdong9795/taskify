'use client';

import { GoDotFill, GoGear } from 'react-icons/go';
import useModal from '@/hooks/useModal';
import { CardData, ColumnType } from '@/types/user/column';
import { useEffect, useState } from 'react';
import { getCards } from '@/services/client/cards';
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
  const [cards, setCards] = useState<CardData | null>(cardsData);
  const { modalRef, handleOpenModal, handleCloseModal } = useModal();
  const {
    modalRef: toDoAddModalRef,
    handleOpenModal: handleOpenToDoAddModal,
    handleCloseModal: handleCloseToDoAddModal,
  } = useModal();

  useEffect(() => {
    setCards(cardsData);
  }, [cardsData]);

  const handleRefreshCards = async () => {
    const result = await getCards({ columnId: data.id, size: 1000 });
    setCards(result);
  };

  return (
    <div>
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <GoDotFill className="text-violet_5534DA mr-2" />
          <h1 className="text-black_333236 font-bold text-lg mr-3">{data.title}</h1>
          <div className="w-5 h-5 rounded p-3 bg-gray_EE flex justify-center items-center font-medium text-xs text-gray_787486">
            {cards?.totalCount ?? 0}
          </div>
        </div>
        <button type="button" aria-label="edit" onClick={handleOpenModal}>
          <GoGear className="text-gray_787486 w-5 h-5" />
        </button>
      </header>
      <ModalOpenButton full handleClick={handleOpenToDoAddModal} text={null} />
      <ol className="overflow-y-scroll w-[284] t:w-full p:w-[314px]" style={{ height: 'calc(100vh - 300px)' }}>
        {cards?.cards.map((card) => (
          <Card key={card.id} data={card} refreshCards={handleRefreshCards} refreshCardAll={refreshCardAll} />
        ))}
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
        <ToDoAddForm columnId={data.id} handleCloseModal={handleCloseToDoAddModal} refreshCards={handleRefreshCards} />
      </Modal>
    </div>
  );
}

export default Column;
