'use client';

// SideBarPagination.tsx
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { dashboardsStore } from '../../stores/dashboardsStore';

function SideBarPagination() {
  const [currentPage, setCurrentPage] = useState(0);
  const fetchDashboards = dashboardsStore((state) => state.fetchDashboards);
  useQuery(['dashboards', currentPage], () => fetchDashboards(currentPage), {
    keepPreviousData: true,
  });

  const handleNextPage = () => {
    setCurrentPage((old) => old + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((old) => Math.max(old - 1, 0));
  };

  return (
    <div>
      <p>현재 페이지: {currentPage}</p>
      <div className="absolute bottom-2 left-2 flex space-x-2">
        <button type="button" className="bg-blue-500 text-white px-2 py-1 rounded" onClick={handlePreviousPage}>
          좌측
        </button>
        <button type="button" className="bg-blue-500 text-white px-2 py-1 rounded" onClick={handleNextPage}>
          우측
        </button>
      </div>
    </div>
  );
}

export default SideBarPagination;
