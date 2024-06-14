import { ModalHandles } from '@/components/Modal';
import { useRef } from 'react';

function useModal() {
  const modalRef = useRef<ModalHandles>(null);

  const handleOpenModal = () => {
    modalRef.current?.open();
  };

  const handleCloseModal = () => {
    modalRef.current?.close();
  };

  return { modalRef, handleOpenModal, handleCloseModal };
}

export default useModal;
