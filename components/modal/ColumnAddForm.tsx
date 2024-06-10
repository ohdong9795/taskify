import ModalTitle from './ModalTitle';
import ModalComponent from '../modal-input/ModalComponent';

function ColumnAddForm() {
  return (
    <div className="max-w-[540px]">
      <ModalTitle title="새 컬럼 생성" />
      <form className="flex flex-col">
        <ModalComponent title="이름" id="newColumnName" htmlFor="newColumnName" placeholder="새로운 컬럼 이름" />
        {/* 버튼 완료되면 추후 수정 */}
        <div className="mt-7">
          <button type="submit">취소</button>
          <button type="submit">생성</button>
        </div>
      </form>
    </div>
  );
}

export default ColumnAddForm;
