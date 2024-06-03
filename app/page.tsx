import LandingNav from '@/components/Nav/LandingNav';
import Lainding from './landing/landing';

export default function Home() {
  return (
    <>
      <LandingNav />
      <div className="mt-[70px]">
        <div className="bg-black text-pink_E876EA w-[400px] relative">랜딩 페이지 tailwind 테스트</div>
        <Lainding />
        <Lainding />
        <Lainding />
        <Lainding />
        <Lainding />
        <Lainding />
      </div>
    </>
  );
}
