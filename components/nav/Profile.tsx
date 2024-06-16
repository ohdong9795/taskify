import Image from 'next/image';

interface ProfileProps {
  imageUrl: string;
}

export default function Profile({ imageUrl }: ProfileProps) {
  return (
    <div className="relative w-[26px] h-[26px] t:w-[34px] t:h-[34px]">
      <Image src={imageUrl} alt="프로필 이미지" fill className="rounded-full border-white border-2 object-cover" />
    </div>
  );
}
