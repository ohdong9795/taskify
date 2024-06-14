import Content from '@/components/dashboard/Content';
import { getMembers } from '@/services/server/members';
import { getCards } from '@/services/server/cards';
import { getColumns } from '@/services/server/columns';
import { CardData, ColumnCard, ColumnData } from '@/types/user/column';

interface DashboardPageProps {
  params: {
    dashboardId: string;
  };
}

async function Dashboard({ params }: DashboardPageProps) {
  const dashboardId = Number(params.dashboardId);

  const columnsData: ColumnData = await getColumns({ dashboardId });
  const data: ColumnCard[] = await Promise.all(
    columnsData.data.map(async (col) => {
      const card: CardData = await getCards({ columnId: col.id });
      return { ...col, ...card };
    }),
  );
  const memberData = await getMembers({ dashboardId });

  return (
    <main className="bg-gray_FAFAFA h-full pt-[70px]">
      <Content dashboardId={dashboardId} data={data} memberData={memberData} />
    </main>
  );
}

export default Dashboard;
