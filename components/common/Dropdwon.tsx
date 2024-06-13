import Link from 'next/link';

export default function Dropdown() {
  return (
    <div className="absolute top-[50px] right-2 bg-white border border-gray-200 rounded-md shadow-lg py-2">
      <Link href="/mydashboard">
        <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">내 대시보드</button>
      </Link>
      <Link href="/mypage">
        <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">내정보</button>
      </Link>
      {/* 로그아웃 하는 기능 구현 */}
      <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">로그아웃</button>
    </div>
  );
}
