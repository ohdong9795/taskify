import DashBoardNav from '@/components/nav/DashboardNav';

function MyDashboardLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="w-full">
        <DashBoardNav />
        {children}
        {modal}
      </div>
      <div id="modal-root" />
    </div>
  );
}

export default MyDashboardLayout;