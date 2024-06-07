// import SideBar from '@/components/(SideBar)/SideBar';
// import MyNav from '@/components/nav/DashboardNav';

function DashboardLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <div className="flex">
      {/* <SideBar /> */}
      <div className="w-full">
        {/* <MyNav /> */}
        {children}
        {modal}
      </div>
      <div id="modal-root" />
    </div>
  );
}

export default DashboardLayout;
