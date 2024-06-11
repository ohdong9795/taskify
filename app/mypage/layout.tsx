// import MyNav from '@/components/nav/MyNav';
// import SideBar from '@/components/SideBar/SideBar';

function MyPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

export default MyPageLayout;
