import Title from '@/components/Modal/components/Title';
import Input from '@/components/Modal/components/Input';

function InviteForm() {
  return (
    <div className="max-w-[540px]">
      <Title title="초대하기" />
      <form className="flex flex-col relative">
        <Input text="이메일" id="InviteMember" placeholder="초대할 멤버의 이메일을 입력하세요" />

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
