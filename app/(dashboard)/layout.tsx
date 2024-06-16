import SideBar from '@/components/SideBar/SideBar';
import DashBoardNav from '@/components/nav/DashboardNav';

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="relative w-full">
        <DashBoardNav />
        {children}
      </div>
      <div id="modal-root" />
    </div>
  );
}

export default DashboardLayout;
