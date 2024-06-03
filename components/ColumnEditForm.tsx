import ModalTitle from './ModalTitle';
import Input from './common/Input';

function ColumnEditForm() {
  return (
    <div className="max-w-[540px]">
      <ModalTitle title="컬럼 관리" />
      <form className="flex flex-col">
        <label htmlFor="newDashboardName" className="text-lg font-medium text-black_333236 mb-[10px]">
          이름
        </label>
        <Input id="newDashboardName" type="modal" placeholder="새로운 컬럼 이름" />
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
