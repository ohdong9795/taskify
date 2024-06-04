import LandingNav from '@/components/nav/LandingNav';
import Header from '@/components/landing/Header';
import Description from '@/components/landing/Description';
import Example from '@/components/landing/Example';

export default function Home() {
  return (
    <>
      <LandingNav />
      <div className=" bg-black flex flex-col items-center pt-[164px] w-full">
        <Header />
        <Description />
        <Example />
      </div>
    </>
  );
}
