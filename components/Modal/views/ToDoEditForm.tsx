'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { CardType } from '@/types/user/column';
import { updateCard } from '@/services/client/cards';
import Title from '@/components/Modal/components/Title';
import Input from '@/components/Modal/components/Input';
import { useDashboard } from '@/contexts/DashboardContext';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import ModalImageInput from '../components/ModalImageInput';
import MultiSelect, { colourOptions } from '../components/MultiSelect';
import SingleSelect from '../components/SingleSelect';
import 'react-datepicker/dist/react-datepicker.css';

interface ToDoEditFormProps {
  cardData: CardType;
  handleCloseModal: () => void;
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

export default function ToDoEditForm({ handleCloseModal, cardData, refreshCardAll }: ToDoEditFormProps) {
  const { dashboardId, memberData, columnsData } = useDashboard();
  const [selectedDate, setSelectedDate] = useState(cardData.dueDate ? new Date(cardData.dueDate) : new Date());
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
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
  const hasErrors = Object.keys(errors).length > 0;
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
    refreshCardAll();
    handleCloseModal();
  };

  return (
    <div className="max-w-[327px] t:max-w-[550px] max-h-[907px]">
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
          rules={{
            required: '제목은 필수입니다.',
            maxLength: { value: 15, message: '제목은 15자를 넘을수 없습니다.' },
          }}
          render={({ field, fieldState: { error } }) => (
            <>
              <Input text="제목 *" id="title" placeholder="제목을 입력하세요" {...field} />
              {error && <p className="text-red-500 mt-[-25px] ml-[3px]">{error.message}</p>}
            </>
          )}
        />
        <Controller
          control={control}
          name="description"
          rules={{
            required: '설명은 필수입니다.',
          }}
          render={({ field, fieldState: { error } }) => (
            <>
              <label htmlFor="description" className="text-lg font-medium text-black_333236 mb-[-25px]">
                설명
              </label>
              <textarea
                className="resize-none w-[484px] m:h-[84px] t:h-[96px] max-md:w-[287px] max-md:h-[42px] rounded-lg border border-solid px-[16px] py-[8px] focus:outline-1 focus:outline border-gray_D9 focus:outline-violet_5534DA"
                id="description"
                placeholder="설명을 입력해 주세요"
                {...field}
              />
              {error && <p className="text-red-500 mt-[-25px] ml-[3px]">{error.message}</p>}
            </>
          )}
        />
        <Controller
          control={control}
          name="dueDate"
          render={({ field }) => (
            <div className="flex flex-col">
              <label htmlFor="dueDate" className="text-lg font-medium text-black_333236 mb-[10px]">
                마감일
              </label>
              <DatePicker
                dateFormat="yyyy-MM-dd HH:mm"
                shouldCloseOnSelect={false}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                minDate={new Date()}
                maxDate={new Date('2100-12-31')}
                selected={selectedDate}
                onChange={(date) => {
                  const formattedDate = format(date as Date, 'yyyy-MM-dd HH:mm');
                  field.onChange(formattedDate);
                  setSelectedDate(date as Date);
                }}
                className="rounded-lg border border-solid px-[16px] py-[15px] focus:outline-1 focus:outline border-gray_D9 focus:outline-violet_5534DA w-[484px] h-[48px] max-md:w-[287px] max-md:h-[42px]"
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
            className={`h-[48px] w-[120px] bg-[#5534DA] rounded-[8px] py-[14px] ml-[12px] ${hasErrors ? 'opacity-50' : 'opacity-100'}`}
            type="submit"
            disabled={hasErrors}
          >
            <span className="text-[16px] w-[28px] y-[19px] text-white">변경</span>
          </button>
        </div>
      </form>
    </div>
  );
}
