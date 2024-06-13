'use client';

import { useState } from 'react';
import { Dashboard } from '@/stores/dashboardsStore';
import { colors } from '@/constants/dashboardColors';
import Link from 'next/link';
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
      <div className="flex flex-col gap-3">
        {paginatedDashboards?.map((dashboard) => {
          const colorClass = `text-${colors[dashboard.color]}`;

          return (
            <Link href={`/dashboard/${dashboard.id}`} key={dashboard.id}>
              <div className="flex items-center gap-1">
                <DashboardLogo className={colorClass} />
                <p className={colorClass}>{dashboard.title}</p>
                {dashboard.createdByMe && <CrownLogo className={colorClass} />}
              </div>
            </Link>
          );
        })}
      </div>
      <div>
        <button onClick={() => setPage((prevPage) => prevPage - 1)} disabled={page === 1}>
          {'<-'}
        </button>
        <button
          onClick={() => setPage((prevPage) => prevPage + 1)}
          disabled={page >= Math.ceil((dashboards ? dashboards.length : 0) / ITEMS_PER_PAGE)}
        >
          {'->'}
        </button>
      </div>
    </>
  );
}
