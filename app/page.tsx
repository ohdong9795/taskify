import LandingNav from '@/components/Nav/LandingNav';
import Lainding from './landing/landing';

export default function Home() {
  return (
    <>
      <LandingNav />
      <div className=" relative">
        <Lainding />
      </div>
    </>
  );
}
