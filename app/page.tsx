import LandingNav from '@/components/nav/LandingNav';
import Header from '@/components/landing/Header';
import Description from '@/components/landing/Description';
import Example from '@/components/landing/Example';
import Footer from '@/components/landing/Footer';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  if (token) {
    redirect('/dashboard/'); // 토큰이 있을 경우 이동할 페이지
  }

  return (
    <>
      <LandingNav />
      <div className=" bg-black flex flex-col items-center pt-[164px] w-full">
        <Header />
        <Description />
        <Example />
      </div>
      <Footer />
    </>
  );
}
