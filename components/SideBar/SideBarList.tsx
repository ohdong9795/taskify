'use client';

import { useRef } from 'react';
import useDataStore from '@/stores/dataStore';
import SideBtn from '../../public/images/sideMenuButton.svg';
import Modal, { ModalHandles } from '../Modal';
import DashboardAddForm from '../Modal/views/DashboardAddForm';
import SideBarItem from './SideBarItem';

function SideBarList() {
  const modalRef = useRef<ModalHandles>(null);
  const { dashboards } = useDataStore();

  const handleOpenModal = () => {
    modalRef.current?.open();
  };

  const handleCloseModal = () => {
    modalRef.current?.close();
  };

  return (
    <div className="ml-[24px] mt-[40px] w-[250px]">
      <div className="flex flex-col items-start gap-3">
        <div className="w-full flex justify-between items-center pr-[24px]">
          <span className="text-xs font-bold">Dashboards</span>
          <SideBtn onClick={handleOpenModal} />
        </div>
        <SideBarItem dashboards={dashboards} />
      </div>
      <Modal ref={modalRef}>
        <DashboardAddForm handleCloseModal={handleCloseModal} />
      </Modal>
    </div>
  );
}

export default SideBarList;
