import Link from 'next/link';
import { GoDotFill, GoGear, GoPlus } from 'react-icons/go';

function Column() {
  const sampleDashboardId = 1;

  return (
    <div className="h-full">
      <ul className="flex h-full">
        <li className="p-5 border-r border-r-gray_EE flex flex-col">
          <header className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <GoDotFill className="text-violet_5534DA mr-2" />
              <h1 className="text-black_333236 font-bold text-lg mr-3">To Do</h1>
              <div className="w-5 h-5 rounded p-3 bg-gray_EE flex justify-center items-center font-medium text-xs text-gray_787486">
                0
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
          <Link href={`/dashboard/${sampleDashboardId}/card`} passHref>
            카드 열기
          </Link>
          <ul>
            <li>할 일 카드</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Column;
