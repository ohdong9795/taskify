'use client';

import { useRef, useState } from 'react';
import { ColumnType, ColumnCard } from '@/types/user/column';
import Modal, { ModalHandles } from '../Modal';
import ColumnAddForm from '../Modal/views/ColumnAddForm';
import Button from './Button';
import Column from './Column';
import Card from './Card';

interface ContentProps {
  dashboardId: number;
  data: ColumnCard[];
}

export default function Content({ dashboardId, data }: ContentProps) {
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

  return (
    <>
      <ul className="flex h-full">
        {columns?.map(({ id, title, totalCount, cards }) => (
          <li key={id} className="p-5 border-r border-r-gray_EE flex flex-col">
            <Column
              id={id}
              title={title}
              count={totalCount}
              onUpdate={handleUpdateColumn}
              onDelete={handleDeleteColumn}
            />
            {cards?.map((card) => <Card key={card.id} data={card} />)}
          </li>
        ))}
        <Button text="새로운 컬럼 추가하기" handleClick={handleOpenModal} />
      </ul>
      <Modal ref={modalRef}>
        <ColumnAddForm dashboardId={dashboardId} handleReload={handleReload} handleCloseModal={handleCloseModal} />
      </Modal>
    </>
  );
}
