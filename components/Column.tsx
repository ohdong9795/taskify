import { GoDotFill, GoGear, GoPlus } from 'react-icons/go';

interface ColumnProps {
  title: string;
  count: number;
}

function Column({ title, count }: ColumnProps) {
  return (
    <>
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <GoDotFill className="text-violet_5534DA mr-2" />
          <h1 className="text-black_333236 font-bold text-lg mr-3">{title}</h1>
          <div className="w-5 h-5 rounded p-3 bg-gray_EE flex justify-center items-center font-medium text-xs text-gray_787486">
            {count}
          </div>
        </div>
        <button type="button" aria-label="edit">
          <GoGear className="text-gray_787486 w-5 h-5" />
        </button>
      </header>
      <button
        type="button"
        className="w-80 flex h-10 bg-white border border-gray_D9D9D9 rounded-md justify-center items-center"
        aria-label="addCard"
      >
        <GoPlus className="text-violet_5534DA" />
      </button>
      <ul>
        <li>할 일 카드</li>
      </ul>
    </>
  );
}

export default Column;