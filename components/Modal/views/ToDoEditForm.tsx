'use client';

import { useForm, Controller } from 'react-hook-form';
import { CardType } from '@/types/user/column';
import { updateCard } from '@/services/client/cards';
import Title from '@/components/Modal/components/Title';
import Input from '@/components/Modal/components/Input';
import { useDashboard } from '@/contexts/DashboardContext';
import ModalImageInput from '../components/ModalImageInput';
import MultiSelect, { colourOptions } from '../components/MultiSelect';
import SingleSelect from '../components/SingleSelect';

interface ToDoEditFormProps {
  cardData: CardType;
  handleCloseModal: () => void;
  refreshCards: () => void;
  refreshCardAll: () => void;
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

export default function ToDoEditForm({ handleCloseModal, cardData, refreshCards, refreshCardAll }: ToDoEditFormProps) {
  const { dashboardId, memberData, columnsData } = useDashboard();
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
      columnId: Number(data.columnId),
      title: data.title,
      description: data.description,
      dueDate: data.dueDate,
      tags: data.tags,
    };

    if (data.imageUrl) body.imageUrl = data.imageUrl;
    await updateCard(body);
    if (cardData.columnId === Number(data.columnId)) refreshCards();
    else refreshCardAll();
    handleCloseModal();
  };

  return (
    <div className="max-w-[327px] t:max-w-[506px] max-h-[907px]">
      <Title title="할 일 수정" />
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-6 t:gap-8">
        <div className="flex justify-between t:justify-normal flex-col t:flex-row gap-6 t:gap-8">
          <Controller
            control={control}
            name="columnId"
            render={({ field }) => (
              <div className="flex flex-col w-[217px]">
                <label htmlFor="columnId" className="text-lg font-medium text-black_333236 mb-[10px]">
                  상태
                </label>
                <SingleSelect
                  {...field}
                  type="column"
                  defaultValue={{
                    value: cardData.columnId,
                    label: columnsData.data.find((col) => col.id === cardData.columnId)?.title ?? '',
                  }}
                  colourOptions={columnsData.data.map((col) => ({
                    value: col.id,
                    label: col.title,
                  }))}
                  onChange={(option) => {
                    if (option && 'value' in option) {
                      field.onChange(option.value);
                    }
                  }}
                />
              </div>
            )}
          />
          <Controller
            control={control}
            name="assigneeUserId"
            render={({ field }) => (
              <div className="flex flex-col w-[217px]">
                <label htmlFor="assigneeUserId" className="text-lg font-medium text-black_333236 mb-[10px]">
                  담당자
                </label>
                <SingleSelect
                  {...field}
                  type="member"
                  defaultValue={{
                    value: cardData.assignee.id,
                    label: cardData.assignee.nickname,
                    image: cardData.assignee.profileImageUrl,
                  }}
                  colourOptions={memberData.members.map((member) => ({
                    value: member.userId,
                    label: member.nickname,
                    image: member.profileImageUrl,
                  }))}
                  onChange={(option) => {
                    if (option && 'value' in option) {
                      field.onChange(option.value);
                    }
                  }}
                />
              </div>
            )}
          />
        </div>
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
            <div>
              <label htmlFor="tags" className="text-lg font-medium text-black_333236 mb-[10px]">
                태그
              </label>
              <MultiSelect
                defaultValue={cardData.tags.map((tag) => {
                  const colour = colourOptions.find((col) => col.value === tag);
                  return {
                    value: colour?.value ?? '',
                    label: colour?.label ?? '',
                    color: colour?.color ?? '',
                  };
                })}
                onChange={(selectedOptions) => {
                  const values = Array.isArray(selectedOptions) ? selectedOptions.map((option) => option.value) : [];
                  field.onChange(values);
                }}
              />
            </div>
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
        <div className="flex justify-end mt-7">
          <button
            className="text-center w-[120px] h-[48px] py-2 t:px-7 rounded bg-violet_5534DA hover:bg-violet-500 text-white"
            type="submit"
          >
            변경
          </button>
        </div>
      </form>
    </div>
  );
}
