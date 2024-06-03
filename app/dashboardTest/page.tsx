import ColumnAddForm from '@/components/ColumnAddForm';
import ColumnEditForm from '@/components/ColumnEditForm';
import DashboardAddForm from '@/components/DashboardAddForm';
import ToDoAddForm from '@/components/ToDoAddForm';
import Link from 'next/link';

function TestPage() {
  return (
    <div className="flex flex-col gap-2">
      <Link href="/dashboardTest/card" passHref>
        카드 열기
      </Link>
      <DashboardAddForm />
      <ColumnAddForm />
      <ColumnEditForm />
      <ToDoAddForm />
    </div>
  );
}

export default TestPage;
