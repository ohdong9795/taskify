import Link from 'next/link';

function TestPage() {
  return (
    <div className="flex flex-col gap-2">
      <Link href="?modal=basic" passHref>
        모달 열기
      </Link>
      <Link href="/dashboardTest/card" passHref>
        카드 열기
      </Link>
    </div>
  );
}

export default TestPage;
