// import SideBar from '@/components/(SideBar)/SideBar';
// import MyNav from '@/components/nav/DashboardNav';

function DashboardLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="flex">
          {/* <SideBar /> */}
          <div className="w-full">
            {/* <MyNav /> */}
            {children}
            {modal}
          </div>
          <div id="modal-root" />
        </div>
      </body>
    </html>
  );
}

export default DashboardLayout;
