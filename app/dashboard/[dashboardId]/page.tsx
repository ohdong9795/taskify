import Column from '@/components/Column';

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
    <main className="bg-gray_FAFAFA h-full pt-[70px]">
      <div className="h-full">
        <ul className="flex h-full">
          {sampleColumn.map(({ title, count }) => (
            <li key={title} className="p-5 border-r border-r-gray_EE flex flex-col">
              <Column title={title} count={count} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Dashboard;
