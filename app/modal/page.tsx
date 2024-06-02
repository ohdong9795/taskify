import Link from 'next/link';
import Modal from './@modal/Modal';

function TestPage({ searchParams }: { searchParams: Record<string, string> | null | undefined }) {
  const show = searchParams?.show;

  return (
    <>
      <div className="flex flex-col gap-2">
        <Link href="/modal/?show=true" passHref>
          서치파람
        </Link>
        <Link href="/modal/card" passHref>
          할 일 카드
        </Link>
        <Link href="/modal/newDashboard" passHref>
          대시보드 생성
        </Link>
      </div>
      {show && <Modal>서치파람</Modal>}
    </>
  );
}

export default TestPage;
