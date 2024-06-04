import Link from 'next/link';

function Dashboard() {
  const sampleDashboardId = 1;

  return (
    <main className="bg-gray_FAFAFA h-full">
      <Link href={`/dashboard/${sampleDashboardId}/card`} passHref>
        카드 열기
      </Link>
    </main>
  );
}

export default Dashboard;
