import Input from '@/components/common/Input';
import ModalTitle from './ModalTitle';

function ToDoAddForm() {
  return (
    <div className="max-w-[540px]">
      <ModalTitle title="할 일 생성" />
      <form className="flex flex-col gap-8">
        <div className="flex flex-col">
          <label htmlFor="manager" className="text-lg font-medium text-black_333236 mb-[10px]">
            담당자
          </label>
          <select id="manager" name="manager" className="rounded-md border border-gray_D9 p-4">
            <option value="">이름을 입력해 주세요</option>
            {/* 유저 데이터 적용 후 구현 */}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="title" className="text-lg font-medium text-black_333236 mb-[10px]">
            제목 *
          </label>
          <Input type="modal" id="title" placeholder="제목을 입력해 주세요" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="text-lg font-medium text-black_333236 mb-[10px]">
            설명 *
          </label>
          <Input type="modal" id="description" placeholder="설명을 입력해 주세요" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dueDate" className="text-lg font-medium text-black_333236 mb-[10px]">
            마감일
          </label>
          <input type="date" id="dueDate" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="tag" className="text-lg font-medium text-black_333236 mb-[10px]">
            태그
          </label>
          <Input type="modal" id="tag" placeholder="입력 후 Enter" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="imageUpload" className="text-lg font-medium text-black_333236 mb-[10px]">
            이미지
          </label>
          <input type="file" id="imageUpload" accept="image/*" />
        </div>
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