'use client';

import Title from '@/components/Modal/components/Title';
import Input from '@/components/Modal/components/Input';
import ModalImageInput from '../components/ModalImageInput';

function ToDoAddForm() {
  return (
    <div className="max-w-[540px] max-h-[907px]">
      <Title title="할 일 생성" />
      <form className="flex flex-col gap-8">
        <div className="flex flex-col w-[217px]">
          <label htmlFor="manager" className="text-lg font-medium text-black_333236 mb-[10px]">
            담당자
          </label>
          <select id="manager" name="manager" className="rounded-md border border-gray_D9 p-4">
            <option value="">이름을 입력해 주세요</option>
            {/* 유저 데이터 적용 후 구현 */}
          </select>
        </div>
        <Input text="제목 *" id="title" placeholder="제목을 입력하세요" />
        <Input text="설명 *" id="description" placeholder="설명을 입력해 주세요" />
        <div className="flex flex-col">
          <label htmlFor="dueDate" className="text-lg font-medium text-black_333236 mb-[10px]">
            마감일
          </label>
          <input type="date" id="dueDate" />
        </div>
        <Input text="태그" id="tag" placeholder="입력 후 Enter" />
        <ModalImageInput />
        {/* 버튼 완료되면 추후 수정 */}
        <div className="mt-7">
          <button type="submit">취소</button>
          <button type="submit">변경</button>
        </div>
      </form>
    </div>
  );
}

export default ToDoAddForm;
