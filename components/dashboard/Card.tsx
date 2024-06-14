import { CardType } from '@/types/user/column';
import Image from 'next/image';

export default function Card({ data }: { data: CardType }) {
  const { title, tags, dueDate, assignee, imageUrl } = data;
  const { profileImageUrl } = assignee;

  return (
    <>
      {imageUrl && <Image src={imageUrl} width={274} height={160} alt="" />}
      {title}
      {tags.join(' ')}
      {dueDate}
      {profileImageUrl && <Image src={profileImageUrl} width={24} height={24} alt="" />}
    </>
  );
}
