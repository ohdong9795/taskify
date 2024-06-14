import { Suspense } from 'react';
import DashboardsField from '@/components/Dashboard/DashboardsField';
import InviteField from '@/components/Dashboard/InviteField';

async function MyDashboardPage() {
  return (
    <main className="mt-[70px] p-10 bg-gray_FAFAFA h-screen flex flex-col gap-10">
      <Suspense fallback={<h1>Loading...</h1>}>
        <DashboardsField />
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        <InviteField />
      </Suspense>
    </main>
  );
}

export default MyDashboardPage;
