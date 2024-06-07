import Input from '@/components/common/Input';
import ModalTitle from './ModalTitle';

function ColumnAddForm() {
  return (
    <div className="max-w-[540px]">
      <ModalTitle title="새 컬럼 생성" />
      <form className="flex flex-col">
        <label htmlFor="newColumnName" className="text-lg font-medium text-black_333236 mb-[10px]">
          이름
        </label>
        <Input id="newColumnName" type="modal" placeholder="새로운 컬럼 이름" />
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
