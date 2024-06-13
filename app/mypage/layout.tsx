// import MyNav from '@/components/nav/MyNav';
// import SideBar from '@/components/SideBar/SideBar';

function MyPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

export default MyPageLayout;
