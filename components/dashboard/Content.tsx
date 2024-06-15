'use client';

import { useState } from 'react';
import { ColumnType, MemberData, ColumnData, CardData } from '@/types/user/column';
import { DashboardProvider } from '@/contexts/DashboardContext';
import useModal from '@/hooks/useModal';
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

  return (
    <DashboardProvider dashboardId={dashboardId} memberData={memberData}>
      <div className="w-full">
        <ul className="flex h-full overflow-x-scroll">
          {columns?.map((col) => (
            <li key={col.id} className="w-[354px] p-5 border-r border-r-gray_EE flex flex-col">
              <Column
                data={col}
                cardsData={
                  cardsDataArray.find((cardData) => cardData.cards.some((card) => card.columnId === col.id)) || null
                }
                onUpdate={handleUpdateColumnSuccess}
                onDelete={handleDeleteColumnSuccess}
              />
            </li>
          ))}
          <div className="w-80">
            <ModalOpenButton text="새로운 컬럼 추가하기" handleClick={handleOpenModal} />
          </div>
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
