import useModal from '@/hooks/useModal';
import { CardType } from '@/types/user/column';
import Image from 'next/image';
import Modal from '../Modal';
import ModalColumnCard from '../Modal/views/ModalColumnCard';
import ToDoEditForm from '../Modal/views/ToDoEditForm';

interface CardProps {
  data: CardType;
  refreshCards: (addCard?: boolean) => void;
}

export default function Card({ data, refreshCards }: CardProps) {
  const { title, tags, dueDate, assignee, imageUrl } = data;
  const { profileImageUrl } = assignee;
  const { modalRef, handleOpenModal, handleCloseModal } = useModal();
  const {
    modalRef: editModalRef,
    handleOpenModal: handleOpenEditModal,
    handleCloseModal: handleCloseEditModal,
  } = useModal();

  const handleClose = () => {
    handleCloseModal();
    refreshCards();
  };

  return (
    <li className="flex flex-col rounded-md border-gray_D9 bg-white p-5 gap-[10px] mb-3">
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
        <ModalColumnCard
          data={data}
          onOpenEditModal={() => {
            handleOpenEditModal();
            handleCloseModal();
          }}
          onClose={handleClose}
        />
      </Modal>
      <Modal ref={editModalRef}>
        <ToDoEditForm cardData={data} handleCloseModal={handleCloseEditModal} refreshCards={refreshCards} />
      </Modal>
    </li>
  );
}
