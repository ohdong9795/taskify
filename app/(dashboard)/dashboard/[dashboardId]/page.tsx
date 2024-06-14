import Content from '@/components/dashboard/Content';
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

  return (
    <main className="bg-gray_FAFAFA h-full pt-[70px]">
      <Content dashboardId={dashboardId} data={data} />
    </main>
  );
}

export default Dashboard;
