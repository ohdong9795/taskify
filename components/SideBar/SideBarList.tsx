'use client';

import Image from 'next/image';
import { useState } from 'react';
import SideBtn from '../../public/images/sideMenuButton.svg';

type ListItem = {
  id: string;
  color: string;
  name: string;
  manager: boolean;
};

function SideBarList() {
  const [listItems, setListItems] = useState<ListItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 15;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const hasNextPage = endIndex < listItems.length;
  const currentItems = listItems.slice(startIndex, endIndex);

  const handleClick = () => {
    const newItem: ListItem = { id: '', color: '', name: '', manager: false };
    setListItems([...listItems, newItem]);
    // 이런 로직대신 모달창이 띄어지고 입력값을 받아오는 로직을 넣으면됨
  };

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1) return;
    const totalPages = Math.ceil(listItems.length / itemsPerPage);
    if (pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="ml-[24px] mt-[40px] w-[250px]">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold">Dashboards</span>
          <button type="button" onClick={handleClick}>
            <Image src={SideBtn} alt="버튼" />
          </button>
        </div>
        <ul className="mt-[15px]">
          {currentItems.map((item) => (
            <li className="mt-[10px]" key={item.id}>
              {item.name}
              {/* 여기에 받아온 입력 값을 하나씩 출력하면됨 */}
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute flex justify-between p-4 bottom-2 left-1">
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
      {/* 페이지네이션 구현방법은 리액트쿼리나 다른것들로 교체 */}
    </>
  );
}

export default SideBarList;
