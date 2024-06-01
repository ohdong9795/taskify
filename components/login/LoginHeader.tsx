import Image from 'next/image';

interface LoginHeaderProps {
  msg: string;
}

export default function LoginHeader({ msg }: LoginHeaderProps) {
  return (
    <>
      <div className="flex justify-center w-full">
        <div className="flex flex-col w-[200px] h-[279px]">
          <Image
            className="ml-[35px] mb-[30px]"
            src="/images/LogoImage.svg"
            width={165}
            height={190}
            alt="로고 이미지"
          />
          <Image src="/images/Taskify.svg" width={200} height={55} alt="로고 이미지" />
        </div>
      </div>
      <div className="mt-[10px] text-black_333236 text-[20px] text-center tracking-[-2px] font-semibold">{msg}</div>
    </>
  );
}
