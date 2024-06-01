'use client';

import Image from 'next/image';
import { useState } from 'react';
import SideBtn from '../../public/images/sideMenuButton.svg';

function SideBarList() {
  const [listItems, setListItems] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 15;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = listItems.slice(startIndex, endIndex);
  const hasNextPage = endIndex < listItems.length;

  const handleClick = () => {
    const newItem = listItems.length + 1;
    setListItems([...listItems, newItem]);
  };

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1) return;
    const totalPages = Math.ceil(listItems.length / itemsPerPage);
    if (pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="p-4 flex items-center ml-6">
        <span className="mr-2">Dashboards</span>
        <button type="button" onClick={handleClick}>
          <Image src={SideBtn} alt="버튼" />
        </button>
      </div>
      <div className="p-4">
        <ul>
          {currentItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-2 left-1 flex justify-between p-4">
        <button
          type="button"
          className="w-10 h-10"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <button
          type="button"
          className="w-10 h-10 ml-10"
          disabled={!hasNextPage}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
        <div className="ml-10">{currentPage}</div>
      </div>
    </>
  );
}

export default SideBarList;
