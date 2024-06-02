function TestLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {children}
        {modal}
        <div id="modal-root" />
      </body>
    </html>
  );
}

export default TestLayout;
