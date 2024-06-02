import Link from 'next/link';

function TestPage() {
  return (
    <div>
      <Link href="/modal-test/card" passHref>
        할 일 카드
      </Link>
    </div>
  );
}

export default TestPage;
