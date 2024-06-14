import useModal from '@/hooks/useModal';
import { CardType } from '@/types/user/column';
import Image from 'next/image';
import Modal from '../Modal';
import ModalColumnCard from '../Modal/views/ModalColumnCard';

interface CardProps {
  data: CardType;
  dashboardId: number;
  onDelete: (id: number, columnId: number) => void;
}

export default function Card({ data, dashboardId, onDelete }: CardProps) {
  const { title, tags, dueDate, assignee, imageUrl } = data;
  const { profileImageUrl } = assignee;
  const { modalRef, handleOpenModal, handleCloseModal } = useModal();

  const handleClose = () => {
    handleCloseModal();
    onDelete(data.id, data.columnId);
  };

  return (
    <div className="flex flex-col rounded-md border-gray_D9 bg-white p-5 gap-[10px]">
      {imageUrl && <Image src={imageUrl} width={274} height={160} alt="" />}
      <span>
        <button onClick={handleOpenModal}>{title}</button>
      </span>
      <div>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="flex justify-between">
        <div>{dueDate}</div>
        <div>{profileImageUrl && <Image src={profileImageUrl} width={24} height={24} alt="" />}</div>
      </div>
      <Modal ref={modalRef}>
        <ModalColumnCard data={data} dashboardId={dashboardId} onClose={handleClose} />
      </Modal>
    </div>
  );
}
