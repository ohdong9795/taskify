'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { GoChevronRight, GoDotFill } from 'react-icons/go';
import { Dashboard, DashboardData } from '@/types/user/dashboard';
import Modal, { ModalHandles } from '@/components/Modal';
import DashboardAddForm from '@/components/Modal/views/DashboardAddForm';
import useDataStore from '@/stores/dataStore';
import Button from './Button';

interface MyDashboardsProps {
  dashboardData: DashboardData;
}

function MyDashboards({ dashboardData }: MyDashboardsProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<ModalHandles>(null);
  const { setDashboards } = useDataStore();
  const { dashboards } = dashboardData;
  const [items, setItems] = useState<Dashboard[]>(dashboards);

  useEffect(() => {
    setDashboards(items);
  }, [items, setDashboards]);

  const handleReload = (item: Dashboard) => {
    setItems((preItems) => [item, ...preItems]);
  };

  const handleOpenModal = () => {
    modalRef.current?.open();
  };

  const handleCloseModal = () => {
    modalRef.current?.close();
  };

  return (
    <section>
      <Button text="새로운 대시보드" ref={buttonRef} handleClick={handleOpenModal} />
      <ul className="flex flex-wrap gap-3">
        {items.map(({ title, id, color }) => (
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
        <DashboardAddForm handleReload={handleReload} handleCloseModal={handleCloseModal} />
      </Modal>
    </section>
  );
}

export default MyDashboards;
