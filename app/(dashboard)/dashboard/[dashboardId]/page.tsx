import Column from '@/components/dashboard/Column';

const sampleColumn = [
  {
    title: 'To Do',
    count: 0,
    cards: [],
  },
  {
    title: 'On Progress',
    count: 2,
    cards: ['card1', 'card2'],
  },
];

function Dashboard() {
  return (
    <main className="bg-gray_FAFAFA h-[1080px] pt-[70px]">
      <ul className="flex h-full">
        {sampleColumn.map(({ title, count }) => (
          <li key={title} className="p-5 border-r border-r-gray_EE flex flex-col">
            <Column title={title} count={count} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Dashboard;
