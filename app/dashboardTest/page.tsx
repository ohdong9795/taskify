import DashboardAddForm from '@/components/DashboardAddForm';
import Link from 'next/link';

function TestPage() {
  return (
    <div className="flex flex-col gap-2">
      <Link href="/dashboardTest/card" passHref>
        카드 열기
      </Link>
      <DashboardAddForm />
    </div>
  );
}

export default TestPage;
