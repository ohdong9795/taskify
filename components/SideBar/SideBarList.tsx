'use client';

import useDataStore from '@/stores/dataStore';
import useModal from '@/hooks/useModal';
import SideBtn from '../../public/images/sideMenuButton.svg';
import Modal from '../Modal';
import DashboardAddForm from '../Modal/views/DashboardAddForm';
import SideBarItem from './SideBarItem';

function SideBarList() {
  const { dashboards } = useDataStore();
  const { modalRef, handleOpenModal, handleCloseModal } = useModal();

  return (
    <div className="ml-[24px] mt-[40px] items-center">
      <div className="flex flex-col items-start gap-3">
        <div className="w-full flex justify-between items-center pr-[24px]">
          <span className="text-xs font-bold hidden t:block text-gray_787486">Dashboards</span>
          <button type="button" onClick={handleOpenModal}>
            <SideBtn />
          </button>
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
