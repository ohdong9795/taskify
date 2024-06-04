import Description01 from '@/public/images/Description01.svg';
import Description02 from '@/public/images/Description02.svg';

export default function Description() {
  return (
    <article className="pt-[184px] flex flex-col gap-[90px]">
      <section className="bg-black_17 w-[1200px] grid grid-cols-2 gap-[60px] items-center pt-[103px] pl-[60px] rounded-lg">
        <div className="flex flex-col gap-[100px] col-start-1 ">
          <h2 className="text-gray_9FA6B2 font-medium text-[22px]">Point 1</h2>
          <div className="text-white text-[48px] font-bold">
            <p>일의 우선순위를 </p>
            <p>관리하세요</p>
          </div>
        </div>
        <div className="col-start-2 ">
          <Description01 />
        </div>
      </section>
      <section className="bg-black_17 w-[1200px] grid grid-cols-2 gap-[60px] items-center pt-[98px] pl-[108px] rounded-lg">
        <div>
          <Description02 />
        </div>
        <div className="flex flex-col gap-[100px]">
          <h2 className="text-gray_9FA6B2 font-medium text-[22px]">Point 2</h2>
          <div className="text-white text-[48px] font-bold">
            <p>해야 할 일을 </p>
            <p>등록하세요</p>
          </div>
        </div>
      </section>
    </article>
  );
}
