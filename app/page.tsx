'use client';

import LandingNav from '@/components/nav/LandingNav';
import Header from '@/components/landing/Header';
import Description from '@/components/landing/Description';
import Example from '@/components/landing/Example';
import Footer from '@/components/landing/Footer';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/stores/authStore';

export default function Home() {
  const router = useRouter();
  const { accessToken } = useAuthStore();

  if (accessToken) {
    router.replace('/mydashboard');
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
