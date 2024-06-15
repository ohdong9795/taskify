import Content from '@/components/dashboard/Content';
import { getMembers } from '@/services/server/members';
import { getColumns } from '@/services/server/columns';
import { CardData, ColumnData } from '@/types/user/column';
import { getCards } from '@/services/server/cards';

interface DashboardPageProps {
  params: {
    dashboardId: string;
  };
}

async function Dashboard({ params }: DashboardPageProps) {
  const dashboardId = Number(params.dashboardId);

  const columnsData: ColumnData = await getColumns({ dashboardId });
  const cardsPromises = columnsData.data.map((col) => getCards({ columnId: col.id, size: 1000 }));
  const cardsDataArray: CardData[] = await Promise.all(cardsPromises);
  const memberData = await getMembers({ dashboardId });

  return (
    <main className="bg-gray_FAFAFA w-full h-full pt-[70px]">
      <Content
        dashboardId={dashboardId}
        columnsData={columnsData}
        cardsDataArray={cardsDataArray}
        memberData={memberData}
      />
    </main>
  );
}

export default Dashboard;
