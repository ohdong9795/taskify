import Description01 from '@/public/images/Description01.svg';
import Description02 from '@/public/images/Description02.svg';

export default function Description() {
  return (
    <article className="pt-[184px] flex flex-col gap-[90px] ">
      <section className=" overflow-hidden bg-black_17 flex flex-col p:grid p:grid-cols-2 gap-[60px] p:items-center pt-[103px] pl-[60px] rounded-lg mx-[40px] ">
        <div className="flex flex-col text-center t:text-start gap-[100px] col-start-1 p:col-start-auto">
          <h2 className="text-gray_9FA6B2 font-medium text-[22px] ">Point 1</h2>
          <div className="text-white text-[48px] font-bold pb-[220px]">
            <p>일의 우선순위를</p>
            <p>관리하세요</p>
          </div>
        </div>
        <div className="self-end p:col-start-auto">
          <Description01 />
        </div>
      </section>

      <section className="bg-black_17 flex flex-col p:grid p:grid-cols-2 gap-[60px] items-center pt-[103px] p:pl-[60px] rounded-lg mx-[40px] ">
        <div className="flex flex-col gap-[100px]  t:text-start p:col-start-2 p:pb-[223px]">
          <h2 className="text-gray_9FA6B2 font-medium text-[22px]">Point 2</h2>
          <div className="text-white text-[48px] font-bold pb-[220px] p:pb-0">
            <p>해야 할 일을 </p>
            <p>등록하세요</p>
          </div>
        </div>
        <div className="p:col-start-1 row-start-1">
          <Description02 />
        </div>
      </section>
    </article>
  );
}
