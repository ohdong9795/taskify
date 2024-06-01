import Link from 'next/link';

function TestPage() {
  return (
    <div className="flex flex-col gap-2">
      <Link href="/modal-test/card" passHref>
        할 일 카드
      </Link>
      <Link href="/modal-test/new-dashboard" passHref>
        대시보드 생성
      </Link>
    </div>
  );
}

export default TestPage;
