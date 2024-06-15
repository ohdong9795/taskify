'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { GoChevronRight, GoChevronLeft, GoDotFill } from 'react-icons/go';
import { DashboardData } from '@/types/user/dashboard';
import Modal from '@/components/Modal';
import DashboardAddForm from '@/components/Modal/views/DashboardAddForm';
import useDataStore from '@/stores/dataStore';
import ModalOpenButton from '@/components/Modal/components/ModalOpenButton';
import useModal from '@/hooks/useModal';
import CrownLogo from '@/public/images/DashboardCrown.svg';

interface MyDashboardsProps {
  dashboardData: DashboardData;
}

function MyDashboards({ dashboardData }: MyDashboardsProps) {
  const { dashboards: initialData, totalCount } = dashboardData;
  const { dashboards, setDashboards } = useDataStore();
  const { modalRef, handleCloseModal, handleOpenModal } = useModal();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [page, setPage] = useState(1);
  const totalPage = Math.ceil(totalCount / 6);
  const startIndex = (page - 1) * 6;
  const endIndex = startIndex + 6;
  const paginatedDashboards = dashboards?.slice(startIndex, endIndex);

  useEffect(() => {
    setDashboards(initialData);
  }, [initialData, setDashboards]);

  return (
    <section className="flex flex-col justify-center t:block">
      <ModalOpenButton text="새로운 대시보드" ref={buttonRef} handleClick={handleOpenModal} />
      <div className="max-w-[1024px] m:min-w-[260px] t:min-w-[504px]">
        <ul className="flex flex-wrap gap-3 mb-3">
          {paginatedDashboards?.map(({ title, id, color, createdByMe }) => (
            <li key={id} className="mx-auto">
              <Link
                href={`/dashboard/${id}`}
                className="w-[330px] h-[70px] flex bg-white border border-gray_D9D9D9 rounded-lg justify-between items-center px-5 py-7 font-semibold text-black_333236 gap-3"
              >
                <div className="flex items-center">
                  <GoDotFill className="mr-2" style={{ color }} />
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap">{title}</span>
                  {createdByMe && <CrownLogo className="ml-2" />}
                </div>
                <GoChevronRight />
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col-reverse justify-center gap-1 p:justify-end t:flex-row t:justify-end t:items-center">
          <span className="mx-auto text-sm font-normal text-black t:mx-0">
            {totalPage} 페이지 중 {page}
          </span>
          <div className="flex justify-center gap-1 t:justify-end p:justify-end">
            <button
              onClick={() => setPage((prevPage) => prevPage - 1)}
              disabled={page === 1}
              type="button"
              className="flex items-center justify-center w-10 h-10 text-2xl bg-white border rounded-md border-gray_D9D9D9 text-gray_9FA6B2 hover:bg-gray-200 disabled:bg-gray-300"
            >
              <GoChevronLeft />
            </button>
            <button
              onClick={() => setPage((prevPage) => prevPage + 1)}
              disabled={page >= Math.ceil((dashboards ? dashboards.length : 0) / 6)}
              type="button"
              className="flex items-center justify-center w-10 h-10 text-2xl bg-white border rounded-md border-gray_D9D9D9 text-gray_9FA6B2 hover:bg-gray-200 disabled:bg-gray-300"
            >
              <GoChevronRight />
            </button>
          </div>
        </div>
      </div>
      <Modal ref={modalRef}>
        <DashboardAddForm handleCloseModal={handleCloseModal} />
      </Modal>
    </section>
  );
}

export default MyDashboards;
