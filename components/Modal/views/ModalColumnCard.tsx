import { BsThreeDotsVertical } from 'react-icons/bs';
import Title from '@/components/Modal/components/Title';
import { CardType } from '@/types/user/column';
import Dropdown, { DropdownHandle } from '@/components/common/Dropdown';
import { useEffect, useRef, useState } from 'react';
import { deleteCardById } from '@/services/client/cards';
import { createComment, getComments } from '@/services/client/comments';
import Image from 'next/image';
import { useDashboard } from '@/contexts/DashboardContext';
import Profile from '@/components/nav/Profile';
import Tags from '@/components/common/Tag';
import Comment from '../components/Comment';

interface ModalColumnCardProps {
  data: CardType;
  onOpenEditModal: () => void;
  onClose: () => void;
}

interface CommentsType {
  cursorId: number;
  comments: [
    {
      id: number;
      content: string;
      createdAt: string;
      updatedAt: string;
      cardId: number;
      author: {
        profileImageUrl: string;
        nickname: string;
        id: number;
      };
    },
  ];
}

function ModalColumnCard({ data, onOpenEditModal, onClose }: ModalColumnCardProps) {
  const { dashboardId, columnsData } = useDashboard();
  const dropdownRef = useRef<DropdownHandle>(null);
  const [comments, setComments] = useState<CommentsType | null>(null);
  const [comment, setComment] = useState('');
  const column = columnsData.data.filter((col) => col.id === data.columnId);

  useEffect(() => {
    (async () => {
      const result = await getComments({ cardId: data.id });
      setComments(result);
    })();
  }, [data.id]);

  const toggleDropdown = () => {
    dropdownRef.current?.toggle();
  };

  const handleDelete = async () => {
    await deleteCardById({ cardId: data.id });
    onClose();
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleCommentCreate = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    await createComment({
      content: comment,
      cardId: data.id,
      columnId: data.columnId,
      dashboardId: Number(dashboardId) ?? 0,
    });

    const result = await getComments({ cardId: data.id });

    setComment('');
    setComments(result);
  };

  const refreshComments = async () => {
    const result = await getComments({ cardId: data.id });
    setComments(result);
  };

  return (
    <div className="max-w-[327px] t:max-w-[680px] p:max-w-[730px]">
      <header className="flex items-center justify-between h-8 mb-6">
        <Title title={data.title} />
        <button type="button" className="mr-14" aria-label="dropdown" onClick={toggleDropdown}>
          <BsThreeDotsVertical className="w-[24px] h-[24px]" />
        </button>
        <Dropdown ref={dropdownRef}>
          <button
            type="button"
            onClick={onOpenEditModal}
            className="block w-full px-4 py-2 text-left hover:bg-gray-100"
          >
            수정하기
          </button>
          <button type="button" onClick={handleDelete} className="block w-full px-4 py-2 text-left hover:bg-gray-100">
            삭제하기
          </button>
        </Dropdown>
      </header>
      <main className="grid t:grid-cols-3 gap-6">
        <section className="col-span-2 order-2 t:order-none">
          <div className="flex items-center">
            <div className="rounded-[11px] bg-violet_F1EFFD text-violet_5534DA px-2 py-1">
              {`● ${column.map((col) => col.title)}`}
            </div>
            <div className="w-px h-full mx-[20px] text-gray_D9">|</div>
            <div className="flex gap-[6px]">
              {data.tags.map((tag) => (
                <Tags key={tag} name={tag} />
              ))}
            </div>
          </div>
          <p className="my-4 text-sm font-normal leading-6 text-black_333236">{data.description}</p>
          <div className="relative flex justify-center w-full">
            {data.imageUrl && <Image src={data.imageUrl} width={450} height={263} alt="카드 이미지" />}
          </div>
          <form className="flex flex-col gap-[10px] relative my-6">
            <label htmlFor="comment" className="font-medium text-black_333236">
              댓글
            </label>
            <textarea
              id="comment"
              name="comment"
              onChange={handleCommentChange}
              value={comment}
              placeholder="댓글 작성하기"
              className="flex items-start p-4 text-sm font-normal border rounded-md h-28 text-gray_9FA6B2 border-gray_D9"
            />
            <button
              type="submit"
              className="absolute bottom-3 right-3 px-8 py-2 border border-gray_D9 rounded-[4px] text-xs font-medium text-violet_5534DA"
              onClick={handleCommentCreate}
            >
              입력
            </button>
          </form>
          <div className="flex flex-col gap-[10px] max-h-[212px] overflow-y-auto">
            {comments?.comments &&
              comments.comments.map((com) => <Comment key={com.id} data={com} refresh={refreshComments} />)}
          </div>
        </section>
        <section className="col-span-2 t:col-span-1 order-1">
          <div className="flex t:flex-col justify-between px-4 py-3 t:py-4 border rounded-lg border-gray_D9">
            <div>
              <span className="text-xs font-semibold text-black_333236">담당자</span>
              <div className="flex items-center text-sm font-normal text-black_333236 t:h-[38px] mt-1 t:mt-[11px] t:mb-[22px]">
                {data.assignee.profileImageUrl && (
                  <div className="mr-2">
                    <Profile imageUrl={data.assignee.profileImageUrl} />
                  </div>
                )}
                <span>{data.assignee.nickname}</span>
              </div>
            </div>
            <div className="mr-[34px] t:mr-0">
              <span className="text-xs font-semibold text-black_333236">마감일</span>
              <div className="text-sm font-normal text-black_333236 mt-2">{data.dueDate}</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ModalColumnCard;
