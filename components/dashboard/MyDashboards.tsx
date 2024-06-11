'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { DashboardData } from '@/types/user/dashboard';
import postCreateDashboard from '@/services/dashboardApi/client';
import Button from './Button';

interface MyDashboardsProps {
  dashboardData: DashboardData;
}

function MyDashboards({ dashboardData }: MyDashboardsProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { dashboards } = dashboardData;

  const handleCreateDashboard = () => {
    postCreateDashboard({ title: 'Test', color: '#000000' });
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
          <Button text="새로운 대시보드" ref={buttonRef} handleClick={handleCreateDashboard} />
          {/* 현재는 포스트 요청을 수행하는 버튼이지만 모달 여는 버튼으로 변경 예정입니다. */}
        </li>
      </ul>
    </section>
  );
}

export default MyDashboards;
