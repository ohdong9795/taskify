import Link from 'next/link';
import LogoImage from '@/public/images/LogoImage.svg';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <LogoImage className="w-60 h-56" />
      <h2 className="text-3xl text-black_17 font-semibold">404 Not Found</h2>
      <Link href="/" className="text-violet_5534DA font-medium underline text-2xl">
        홈으로
      </Link>
    </div>
  );
}
