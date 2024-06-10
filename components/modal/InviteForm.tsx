import ModalTitle from './ModalTitle';
import ModalComponent from '../modal-input/ModalComponent';

function InviteForm() {
  return (
    <div className="max-w-[540px]">
      <ModalTitle title="초대하기" />
      <form className="flex flex-col relative">
        <ModalComponent
          title="이메일"
          htmlFor="InviteMember"
          id="InviteMember"
          placeholder="초대할 멤버의 이메일을 입력하세요"
        />

        {/* 버튼 완료되면 추후 수정 */}
        <div className="mt-7">
          <button type="submit">취소</button>
          <button type="submit">초대</button>
        </div>
      </form>
    </div>
  );
}

export default InviteForm;
