'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { DashboardData } from '@/types/user/dashboard';
import Modal, { ModalHandles } from '@/components/Modal';
import DashboardAddForm from '@/components/Modal/views/DashboardAddForm';
import Button from './Button';

interface MyDashboardsProps {
  dashboardData: DashboardData;
}

function MyDashboards({ dashboardData }: MyDashboardsProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<ModalHandles>(null);
  const { dashboards } = dashboardData;

  const handleOpenModal = () => {
    modalRef.current?.open();
  };

  return (
    <section>
      <ul className="flex gap-3">
        {dashboards.map(({ title, id }) => (
          <li key={id}>
            <Link
              href={`/dashboard/${id}`}
              className="w-80 flex h-10 bg-white border border-gray_D9D9D9 rounded-lg justify-center items-center px-25 py-6 font-semibold text-black_333236 gap-3"
            >
              {title}
            </Link>
          </li>
        ))}
        <li>
          <Button text="새로운 대시보드" ref={buttonRef} handleClick={handleOpenModal} />
        </li>
      </ul>
      <Modal ref={modalRef}>
        <DashboardAddForm />
      </Modal>
    </section>
  );
}

export default MyDashboards;
