import Profile from '@/components/nav/Profile';
import { deleteComment, updateComment } from '@/services/client/comments';
import useAuthStore from '@/stores/authStore';
import axios from 'axios';
import dayjs from 'dayjs';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

interface CommentProps {
  data: {
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
  };
  refresh: () => void;
}

export default function Comment({ data, refresh }: CommentProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(data.content);
  const inputRef = useRef<HTMLInputElement>(null);
  const { user } = useAuthStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleUpdate = async () => {
    if (user?.id !== data.author.id) {
      toast('본인의 댓글만 수정할 수 있습니다.', {
        position: 'top-center',
        autoClose: 1500,
        draggable: true,
        theme: 'dark',
      });
    }

    if (isEdit && user?.id === data.author.id) {
      try {
        await updateComment({ commentId: data.id, content: inputValue });
        refresh();
      } catch (error) {
        const message = axios.isAxiosError(error) ? error.message : '수정작업에 알 수 없는 오류가 발생하였습니다.';
        toast(message, {
          position: 'top-center',
          autoClose: 1500,
          draggable: true,
          theme: 'dark',
        });
      } finally {
        setIsEdit(false);
      }
    } else {
      setIsEdit(true);
    }
  };

  const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      await handleUpdate();
    }
  };

  const handleDelete = async () => {
    await deleteComment({ commentId: data.id });
    refresh();
  };

  useEffect(() => {
    if (isEdit && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEdit]);

  return (
    <div>
      <div className="flex items-center mb-[6px] gap-[10px]">
        {data.author.profileImageUrl && <Profile imageUrl={data.author.profileImageUrl} />}
        <span className="mr-2 text-sm font-semibold text-black_333236">{data.author.nickname}</span>
        <div className="text-xs font-normal text-gray_9FA6B2">{dayjs(data.updatedAt).format('YYYY.MM.DD HH:MM')}</div>
      </div>
      <div className="pl-[44px]">
        {isEdit ? (
          <input
            defaultValue={data.content}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="mb-3 text-sm font-normal text-black_333236"
            ref={inputRef}
          />
        ) : (
          <p className="mb-3 text-sm font-normal text-black_333236">{data.content}</p>
        )}
        <div className="flex gap-3 text-xs font-normal text-gray_9FA6B2">
          <button onClick={handleUpdate} className="underline" type="button">
            수정
          </button>
          <button onClick={handleDelete} className="underline" type="button">
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}
