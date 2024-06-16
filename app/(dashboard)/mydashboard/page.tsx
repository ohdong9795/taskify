import { Suspense } from 'react';
import DashboardsField from '@/components/Dashboard/DashboardsField';
import InviteField from '@/components/Dashboard/InviteField';
import Loading from '../loading';

async function MyDashboardPage() {
  return (
    <main className="flex flex-col w-full h-full gap-10 p-10 overflow-scroll bg-gray_FAFAFA">
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
