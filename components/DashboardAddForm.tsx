import ModalTitle from './ModalTitle';
import Input from './common/Input';

function DashboardAddForm() {
  return (
    <div className="max-w-[540px]">
      <ModalTitle title="새로운 대시보드" />
      <form className="flex flex-col relative">
        <label htmlFor="newDashboardName" className="text-lg font-medium text-black_333236 mb-[10px]">
          대시보드 이름
        </label>
        <Input id="newDashboardName" type="modal" />
        <div className="flex gap-1 my-7">
          {/* 대시보드 색상 선택하는 라디오 인풋도 필요할 것 같습니다 */}
          <label htmlFor="colorGreen" className="w-8 h-8 rounded-full cursor-pointer bg-green_7AC555">
            <input type="radio" id="colorGreen" name="dashboardColor" value="green" aria-label="green" />
          </label>
        </div>
        {/* 버튼 완료되면 추후 수정 */}
        <div>
          <button type="submit">취소</button>
          <button type="submit">생성</button>
        </div>
      </form>
    </div>
  );
}

export default DashboardAddForm;
