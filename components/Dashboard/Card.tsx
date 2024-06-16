import React, { forwardRef } from 'react';
import Image from 'next/image';
import useModal from '@/hooks/useModal';
import { CardType } from '@/types/user/column';
import { IoCalendarClearOutline } from 'react-icons/io5';
import dayjs from 'dayjs';
import Modal from '../Modal';
import ModalColumnCard from '../Modal/views/ModalColumnCard';
import ToDoEditForm from '../Modal/views/ToDoEditForm';
import Profile from '../nav/Profile';
import Tags from '../common/Tag';

interface CardProps {
  data: CardType;
  refreshCardAll: () => void;
}

const Card = forwardRef<HTMLLIElement, CardProps>(({ data, refreshCardAll }, ref) => {
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
    refreshCardAll();
  };

  return (
    <li ref={ref} className="flex flex-col rounded-md border border-solid border-gray_D9 bg-white p-5 gap-[10px] mb-4">
      {imageUrl && (
        <div className="w-full h-[160px] relative cursor-pointer">
          <Image onClick={handleOpenModal} src={imageUrl} layout="fill" objectFit="cover" alt="" />
        </div>
      )}
      <span>
        <button onClick={handleOpenModal}>{title}</button>
      </span>
      <div className="flex gap-[6px]">
        {tags.map((tag) => (
          <Tags key={tag} name={tag} />
        ))}
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-[6px]">
          <IoCalendarClearOutline className="w-[18px] h-[18px] text-gray_787486" />
          <span className="text-xs text-gray_787486">{dayjs(dueDate).format('YYYY.MM.DD')}</span>
        </div>
        <div>{profileImageUrl && <Profile imageUrl={profileImageUrl} />}</div>
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
        <ToDoEditForm cardData={data} handleCloseModal={handleCloseEditModal} refreshCardAll={refreshCardAll} />
      </Modal>
    </li>
  );
});

Card.displayName = 'Card';

export default Card;
