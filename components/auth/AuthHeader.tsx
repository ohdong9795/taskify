import LogoImage from '@/public/images/LogoImage.svg';
import Taskify from '@/public/images/Taskify.svg';

interface LoginHeaderProps {
  msg: string;
}

export default function AuthHeader({ msg }: LoginHeaderProps) {
  return (
    <>
      <div className="flex justify-center w-full">
        <div className="flex flex-col w-[200px] h-[279px]">
          <LogoImage className="ml-[35px] mb-[30px] text-violet_5534DA w-[165px] h-[190px]" />
          <Taskify className="text-violet_5534DA w-[200px] h-[55px]" />
        </div>
      </div>
      <div className="mt-[10px] text-black_333236 text-[20px] text-center tracking-[-2px] font-semibold">{msg}</div>
    </>
  );
}
