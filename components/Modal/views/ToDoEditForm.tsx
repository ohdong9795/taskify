'use client';

import { useForm, Controller } from 'react-hook-form';
import { CardType } from '@/types/user/column';
import { updateCard } from '@/services/client/cards';
import Title from '@/components/Modal/components/Title';
import Input from '@/components/Modal/components/Input';
import { useDashboard } from '@/contexts/DashboardContext';
import ModalImageInput from '../components/ModalImageInput';

interface ToDoEditFormProps {
  cardData: CardType;
  handleCloseModal: () => void;
  refreshCards: (addCard?: boolean) => void;
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

interface UpdateCardBody extends FormValues {
  cardId: number;
}

export default function ToDoEditForm({ handleCloseModal, cardData, refreshCards }: ToDoEditFormProps) {
  const { dashboardId, memberData } = useDashboard();
  const { control, handleSubmit, setValue } = useForm<FormValues>({
    defaultValues: {
      assigneeUserId: cardData.assignee.id,
      title: cardData.title,
      description: cardData.description,
      dueDate: cardData.dueDate,
      tags: cardData.tags,
      imageUrl: cardData.imageUrl,
      dashboardId,
      columnId: cardData.columnId,
    },
  });
  const handleImageUpload = (url: string) => {
    setValue('imageUrl', url);
  };
  const submit = async (data: FormValues) => {
    const body: UpdateCardBody = {
      cardId: cardData.id,
      assigneeUserId: Number(data.assigneeUserId),
      dashboardId,
      columnId: cardData.columnId,
      title: data.title,
      description: data.description,
      dueDate: data.dueDate,
      tags: data.tags,
    };

    if (data.imageUrl) body.imageUrl = data.imageUrl;
    await updateCard(body);
    refreshCards();
    handleCloseModal();
  };

  return (
    <div className="max-w-[540px] max-h-[907px]">
      <Title title="할 일 수정" />
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-8">
        <Controller
          control={control}
          name="assigneeUserId"
          render={({ field }) => (
            <div className="flex flex-col w-[217px]">
              <select {...field}>
                <option value="">이름을 입력해 주세요</option>
                {memberData.members.map((member) => (
                  <option key={member.id} value={member.userId} selected={cardData.assignee.id === member.userId}>
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
                마감일
              </label>
              <input
                type="datetime-local"
                id="dueDate"
                value={field.value ? field.value.replace(' ', 'T') : ''}
                onChange={(e) => {
                  const value = e.target.value.replace('T', ' ');
                  field.onChange(value);
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
          render={({ field }) => (
            <ModalImageInput
              imageUrl={cardData.imageUrl}
              columnId={cardData.columnId}
              onImageUpload={handleImageUpload}
              {...field}
            />
          )}
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
