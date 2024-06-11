import ModalTitle from './ModalTitle';
import ModalComponent from '../../modal-input/ModalComponent';

function ColumnEditForm() {
  return (
    <div className="max-w-[540px]">
      <ModalTitle title="컬럼 관리" />
      <form className="flex flex-col relative">
        <ModalComponent title="이름" htmlFor="EditColumnName" id="EditColumnName" />
        {/* placeholder로는 현재 컬럼 명의 이름을 넣어주면 됩니다 */}

        {/* 버튼 완료되면 추후 수정 */}
        <div className="mt-7">
          <button type="submit">취소</button>
          <button type="submit">변경</button>
        </div>
        <button type="submit" className="absolute bottom-0 text-gray_9FA6B2 font-normal text-sm underline">
          삭제하기
        </button>
      </form>
    </div>
  );
}

export default ColumnEditForm;
