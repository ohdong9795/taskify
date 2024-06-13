'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { GoChevronRight, GoDotFill } from 'react-icons/go';
import { DashboardData } from '@/types/user/dashboard';
import Modal, { ModalHandles } from '@/components/Modal';
import DashboardAddForm from '@/components/Modal/views/DashboardAddForm';
import useDataStore from '@/stores/dataStore';
import ModalOpenButton from '@/components/Modal/components/ModalOpenButton';

interface MyDashboardsProps {
  dashboardData: DashboardData;
}

function MyDashboards({ dashboardData }: MyDashboardsProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<ModalHandles>(null);
  const { dashboards: initialData } = dashboardData;
  const { dashboards, setDashboards } = useDataStore();

  useEffect(() => {
    setDashboards(initialData);
  }, [initialData, setDashboards]);

  const handleOpenModal = () => {
    modalRef.current?.open();
  };

  const handleCloseModal = () => {
    modalRef.current?.close();
  };

  return (
    <section>
      <ModalOpenButton text="새로운 대시보드" ref={buttonRef} handleClick={handleOpenModal} />
      <ul className="flex flex-wrap gap-3">
        {dashboards?.map(({ title, id, color }) => (
          <li key={id} className="">
            <Link
              href={`/dashboard/${id}`}
              className="w-[330px] flex h-10 bg-white border border-gray_D9D9D9 rounded-lg justify-between items-center px-5 py-7 font-semibold text-black_333236 gap-3"
            >
              <div className="flex items-center">
                <GoDotFill className="mr-2" style={{ color }} />
                <span className="w-44 text-ellipsis overflow-hidden whitespace-nowrap">{title}</span>
              </div>
              <GoChevronRight />
            </Link>
          </li>
        ))}
      </ul>
      <Modal ref={modalRef}>
        <DashboardAddForm handleCloseModal={handleCloseModal} />
      </Modal>
    </section>
  );
}

export default MyDashboards;
