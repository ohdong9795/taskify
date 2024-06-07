import Image from 'next/image';
import cardImage from '@/public/images/cardImage2.svg';
import { BsThreeDotsVertical } from 'react-icons/bs';
import ModalTitle from './ModalTitle';

function ModalColumnCard() {
  return (
    <div className="max-w-[730px]">
      <header className="flex items-center justify-between h-8 mb-6">
        <ModalTitle title="새로운 일정 관리 Taskify" />
        <button type="button" className="mr-14" aria-label="dropdown">
          <BsThreeDotsVertical className="w-[24px] h-[24px]" />
        </button>
      </header>
      <main className="grid grid-cols-3 gap-6">
        <section className="col-span-2">
          <div>tags</div>
          <p className="my-4 text-sm font-normal leading-6 text-black_333236">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, rem error ipsam ipsum dolores necessitatibus
            commodi, voluptate et facere, numquam natus? Vitae odio, maxime deleniti nobis repudiandae veritatis magni
            quas.
          </p>
          <div className="relative flex justify-center w-full">
            <Image width={450} height={200} src={cardImage} alt="cardIamge" />
          </div>
          <form className="flex flex-col gap-[10px] relative my-6">
            <label htmlFor="comment" className="font-medium text-black_333236">
              댓글
            </label>
            <textarea
              id="comment"
              name="comment"
              placeholder="댓글 작성하기"
              className="flex items-start p-4 text-sm font-normal border rounded-md h-28 text-gray_9FA6B2 border-gray_D9"
            />
            <button
              type="submit"
              className="absolute bottom-3 right-3 px-8 py-2 border border-gray_D9 rounded-[4px] text-xs font-medium text-violet_5534DA"
            >
              입력
            </button>
          </form>
          <div className="flex gap-[10px]">
            <div>image</div>
            <div>
              <div className="flex items-center mb-[6px]">
                <span className="mr-2 text-sm font-semibold text-black_333236">정만철</span>
                <div className="text-xs font-normal text-gray_9FA6B2">2022.12.27 14:00</div>
              </div>
              <p className="mb-3 text-sm font-normal text-black_333236">하이하이하이</p>
              <div className="flex gap-3 text-xs font-normal text-gray_9FA6B2">
                <button className="underline" type="button">
                  수정
                </button>
                <button className="underline" type="button">
                  삭제
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-1">
          <div className="p-4 border rounded-lg border-gray_D9">
            <span className="text-xs font-semibold text-black_333236">담당자</span>
            <div className="flex text-sm font-normal text-black_333236">
              <div className="mr-2">image</div>
              <span>배유철</span>
            </div>
            <div>
              <span className="text-xs font-semibold text-black_333236">마감일</span>
              <div className="text-sm font-normal text-black_333236">2022.12.30 19:00</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ModalColumnCard;
