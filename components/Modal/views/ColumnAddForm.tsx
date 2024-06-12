import Title from '@/components/Modal/components/Title';
import Input from '@/components/Modal/components/Input';

function ColumnAddForm() {
  return (
    <div className="max-w-[540px]">
      <Title title="새 컬럼 생성" />
      <form className="flex flex-col">
        <Input text="이름" id="newColumnName" placeholder="새로운 컬럼 이름" />
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
