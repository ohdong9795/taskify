'use client';

import { ModalResetButton, ModalSubmitButton, PaginationButtons, ReturnButton, ModalProvider } from '../components/Button';

export default function Home() {
  return (
    <ModalProvider>
      <div className="bg-black text-pink_E876EA w-[400px] p-4 space-y-4">
        <div>랜딩 페이지 Tailwind 테스트</div>
        <ModalResetButton>Reset Button</ModalResetButton>
        <ModalSubmitButton>Submit Button</ModalSubmitButton>
        <PaginationButtons
          allPage={10}
          nowPage={1}
          handleBackwardButtonClick={() => alert('Backward')}
          handleForwardButtonClick={() => alert('Forward')}
          isStart={false}
          isEnd={false}
        />
        <ReturnButton />
      </div>
    </ModalProvider>
  );
} 