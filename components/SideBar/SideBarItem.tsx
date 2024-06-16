'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Dashboard } from '@/types/user/dashboard';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import CrownLogo from '../../public/images/DashboardCrown.svg';
import DashboardLogo from '../../public/images/DashboardIcon.svg';

const ITEMS_PER_PAGE = 18;

export default function SideBarItem({ dashboards }: { dashboards: Dashboard[] | null }) {
  const [page, setPage] = useState(1);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedDashboards = dashboards?.slice(startIndex, endIndex);

  return (
    <>
      <ul className="flex flex-col">
        {paginatedDashboards?.map(({ id, color, title, createdByMe }) => (
          <li key={id} className="w-full">
            <Link
              href={`/dashboard/${id}`}
              className="flex w-full items-center gap-2 text-lg p-3 hover:bg-violet_F1EFFD rounded-lg"
            >
              <DashboardLogo style={{ color }} className="items-center" />
              <p className="hidden t:block">{title}</p>
              {createdByMe && <CrownLogo className="hidden t:block" />}
            </Link>
          </li>
        ))}
      </ul>
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
    </>
  );
}
