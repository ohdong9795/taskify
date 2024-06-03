import Modal from '@/components/common/Modal';

function TestLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Modal />
      </body>
    </html>
  );
}

export default TestLayout;
