'use client';

import { useRef, useState } from 'react';
import { ColumnType, ColumnCard, MemberData } from '@/types/user/column';
import { getCards } from '@/services/client/cards';
import Modal, { ModalHandles } from '../Modal';
import ColumnAddForm from '../Modal/views/ColumnAddForm';
import Column from './Column';
import Card from './Card';
import ModalOpenButton from '../Modal/components/ModalOpenButton';

interface ContentProps {
  dashboardId: number;
  data: ColumnCard[];
  memberData: MemberData;
}

export default function Content({ dashboardId, data, memberData }: ContentProps) {
  const [columns, setColumns] = useState(data);
  const modalRef = useRef<ModalHandles>(null);

  const handleReload = (col: ColumnType) => {
    setColumns((preCols) => [...preCols, { ...col, totalCount: 0, cursorId: null, cards: [] }]);
  };

  const handleOpenModal = () => {
    modalRef.current?.open();
  };

  const handleCloseModal = () => {
    modalRef.current?.close();
  };

  const handleDeleteCard = (cardId: number, columnId: number) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) => {
        if (column.id === columnId) {
          return {
            ...column,
            cards: column.cards.filter((card) => card.id !== cardId),
            totalCount: column.totalCount - 1,
          };
        }
        return column;
      }),
    );
  };

  const handleUpdateColumn = (id: number, title: string) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) => {
        if (column.id === id) {
          return { ...column, title };
        }
        return column;
      }),
    );
  };

  const handleDeleteColumn = (id: number) => {
    setColumns((prevColumns) => prevColumns.filter((column) => column.id !== id));
  };

  const refreshCards = async (columnId: number) => {
    const result = await getCards({ columnId });
    setColumns((prevColumns) =>
      prevColumns.map((column) => {
        if (column.id === columnId) {
          return { ...column, cards: result.cards, totalCount: result.totalCount, cursorId: result.cursorId };
        }
        return column;
      }),
    );
  };

  return (
    <>
      <ul className="flex h-full">
        {columns?.map(({ id, title, totalCount, cards }) => (
          <li key={id} className="p-5 border-r border-r-gray_EE flex flex-col gap-5">
            <Column
              id={id}
              dashboardId={dashboardId}
              title={title}
              memberData={memberData}
              count={totalCount}
              onUpdate={handleUpdateColumn}
              onDelete={handleDeleteColumn}
              refreshCards={refreshCards}
            />
            {cards?.map((card) => (
              <Card key={card.id} data={card} dashboardId={dashboardId} onDelete={handleDeleteCard} />
            ))}
          </li>
        ))}
        <ModalOpenButton text="새로운 컬럼 추가하기" handleClick={handleOpenModal} />
      </ul>
      <Modal ref={modalRef}>
        <ColumnAddForm dashboardId={dashboardId} handleReload={handleReload} handleCloseModal={handleCloseModal} />
      </Modal>
    </>
  );
}
