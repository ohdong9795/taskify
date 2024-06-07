import Example01 from '@/public/images/Example01.svg';
import Example02 from '@/public/images/Example02.svg';
import Example03 from '@/public/images/Example03.svg';

export default function Example() {
  return (
    <article className="flex flex-col pt-[90px] gap-[36px] pb-[160px]">
      <div className="text-white font-bold text-[28px] ">생산성을 높이는 다양한 설정 ⚡️</div>
      <div className="flex flex-col lg:flex-row gap-[33px]">
        <div className="flex flex-col ">
          <div className="example-container">
            <Example01 className=" items-center" />
          </div>
          <div className="example-description">
            <div className="font-bold">대시보드 설정</div>
            <div>대시보드 사진과 이름을 변경할 수 있어요.</div>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="example-container">
            <Example02 className=" items-center" />
          </div>
          <div className="example-description">
            <div className="font-bold">초대</div>
            <div>새로운 팀원을 초대할 수 있어요.</div>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="example-container">
            <Example03 className=" items-center" />
          </div>
          <div className="example-description">
            <div className="font-bold">구성원</div>
            <div>구성원을 초대하고 내보낼 수 있어요.</div>
          </div>
        </div>
      </div>
    </article>
  );
}
