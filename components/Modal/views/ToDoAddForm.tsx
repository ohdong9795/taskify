'use client';

import { useForm, Controller } from 'react-hook-form';
import dayjs from 'dayjs';

import { MemberData } from '@/types/user/column';
import { createCard } from '@/services/client/cards';

import Title from '@/components/Modal/components/Title';
import Input from '@/components/Modal/components/Input';
import ModalImageInput from '../components/ModalImageInput';

interface ColumnAddFormProps {
  columnId: number;
  dashboardId: number;
  memberData: MemberData;
  handleCloseModal: () => void;
  refreshCards: (id: number) => void;
}

interface FormValues {
  assigneeUserId: number;
  dashboardId: number;
  columnId: number;
  title: string;
  description: string;
  dueDate: string;
  tags: string[];
  imageUrl?: string;
}

function ToDoAddForm({ dashboardId, columnId, handleCloseModal, memberData, refreshCards }: ColumnAddFormProps) {
  const { control, handleSubmit, setValue } = useForm<FormValues>();
  const handleImageUpload = (url: string) => {
    setValue('imageUrl', url);
  };

  const submit = async (data: FormValues) => {
    const body: FormValues = {
      assigneeUserId: Number(data.assigneeUserId),
      dashboardId,
      columnId,
      title: data.title,
      description: data.description,
      dueDate: data.dueDate,
      tags: data.tags,
    };

    if (data.imageUrl) body.imageUrl = data.imageUrl;
    await createCard(body);
    refreshCards(columnId);
    handleCloseModal();
  };

  return (
    <div className="max-w-[540px] max-h-[907px]">
      <Title title="할 일 생성" />
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-8">
        <Controller
          control={control}
          name="assigneeUserId"
          render={({ field }) => (
            <div className="flex flex-col w-[217px]">
              <select {...field}>
                <option value="">이름을 입력해 주세요</option>
                {memberData.members.map((member) => (
                  <option key={member.id} value={member.userId}>
                    {member.nickname}
                  </option>
                ))}
              </select>
            </div>
          )}
        />
        <Controller
          control={control}
          name="title"
          render={({ field }) => <Input text="제목 *" id="title" placeholder="제목을 입력하세요" {...field} />}
        />
        <Controller
          control={control}
          name="description"
          render={({ field }) => <Input text="설명 *" id="description" placeholder="설명을 입력해 주세요" {...field} />}
        />
        <Controller
          control={control}
          name="dueDate"
          render={({ field }) => (
            <div className="flex flex-col">
              <label htmlFor="dueDate" className="text-lg font-medium text-black_333236 mb-[10px]">
                날짜
              </label>
              <input
                type="datetime-local"
                id="dueDate"
                value={field.value ? dayjs(field.value).format('YYYY-MM-DDTHH:mm') : ''}
                onChange={(e) => {
                  const { value } = e.target;
                  field.onChange(dayjs(value).format('YYYY-MM-DD HH:mm'));
                }}
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="tags"
          render={({ field }) => (
            <Input
              text="태그"
              id="tag"
              placeholder="입력 후 Enter, 쉼표로 구분"
              {...field}
              onChange={(e) => {
                const tagsArray = e.target.value.split(',').map((tag) => tag.trim());
                field.onChange(tagsArray);
              }}
            />
          )}
        />
        <Controller
          control={control}
          name="imageUrl"
          render={({ field }) => <ModalImageInput columnId={columnId} onImageUpload={handleImageUpload} {...field} />}
        />
        <div className="mt-7">
          <button type="button" onClick={handleCloseModal}>
            취소
          </button>
          <button type="submit">변경</button>
        </div>
      </form>
    </div>
  );
}

export default ToDoAddForm;
