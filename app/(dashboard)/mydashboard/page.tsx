import { Suspense } from 'react';
import DashboardsField from '@/components/Dashboard/DashboardsField';
import InviteField from '@/components/Dashboard/InviteField';
import Loading from '../loading';

async function MyDashboardPage() {
  return (
    <main className="px-10 pb-10 bg-gray_FAFAFA h-full flex flex-col overflow-scroll gap-10 w-full pt-[110px]">
      <Suspense fallback={<Loading />}>
        <DashboardsField />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <InviteField />
      </Suspense>
    </main>
  );
}

export default MyDashboardPage;
