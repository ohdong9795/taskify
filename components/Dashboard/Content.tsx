'use client';

import { useState } from 'react';
import { ColumnType, MemberData, ColumnData, CardData } from '@/types/user/column';
import { DashboardProvider } from '@/contexts/DashboardContext';
import useModal from '@/hooks/useModal';
import { getCards } from '@/services/client/cards';
import Modal from '../Modal';
import ColumnAddForm from '../Modal/views/ColumnAddForm';
import Column from './Column';
import ModalOpenButton from '../Modal/components/ModalOpenButton';

interface ContentProps {
  dashboardId: number;
  columnsData: ColumnData;
  cardsDataArray: CardData[];
  memberData: MemberData;
}

export default function Content({ dashboardId, columnsData, cardsDataArray, memberData }: ContentProps) {
  const [columns, setColumns] = useState(columnsData.data);
  const [cards, setCards] = useState(cardsDataArray);
  const { modalRef, handleOpenModal, handleCloseModal } = useModal();

  const handleAddColumnSuccess = (col: ColumnType) => {
    setColumns((preCols) => [...preCols, col]);
  };

  const handleDeleteColumnSuccess = (id: number): void => {
    setColumns((prevColumns) => prevColumns.filter((column) => column.id !== id));
  };

  const handleUpdateColumnSuccess = (id: number, title: string) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) => {
        if (column.id === id) {
          return { ...column, title };
        }
        return column;
      }),
    );
  };

  const refreshCardAll = () => {
    setCards([]);

    (async () => {
      const cardsPromises = columnsData.data.map((col) => getCards({ columnId: col.id, size: 1000 }));
      const result: CardData[] = await Promise.all(cardsPromises);
      setCards(result);
    })();
  };

  return (
    <DashboardProvider dashboardId={dashboardId} memberData={memberData} columnsData={columnsData}>
      <div
        className="fixed transform -translate-x-1/2 bottom-2 left-1/2 p:static p:transform-none p:pl-5 p:pt-5"
        style={{ left: `calc(50% + var(--sidebar-width) / 2)` }}
      >
        <ModalOpenButton text="새로운 컬럼 추가하기" handleClick={handleOpenModal} />
      </div>
      <div className="w-full">
        <ul className="flex flex-col h-full pr-12 overflow-scroll p:flex-row border-t">
          {columns?.map((col) => (
            <li key={col.id} className="w-full p:w-[354px] p-5 border-r border-r-gray_EE flex flex-col">
              <Column
                data={col}
                cardsData={cards.find((cardData) => cardData.cards.some((card) => card.columnId === col.id)) || null}
                onUpdate={handleUpdateColumnSuccess}
                onDelete={handleDeleteColumnSuccess}
                refreshCardAll={refreshCardAll}
              />
            </li>
          ))}
        </ul>
        <Modal ref={modalRef}>
          <ColumnAddForm
            dashboardId={dashboardId}
            onSuccess={handleAddColumnSuccess}
            handleCloseModal={handleCloseModal}
          />
        </Modal>
      </div>
    </DashboardProvider>
  );
}
