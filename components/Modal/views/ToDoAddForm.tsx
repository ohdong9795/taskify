'use client';

import { useForm, Controller } from 'react-hook-form';
import { useEffect } from 'react';

import { createCard } from '@/services/client/cards';
import Title from '@/components/Modal/components/Title';
import Input from '@/components/Modal/components/Input';
import { useDashboard } from '@/contexts/DashboardContext';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

import ModalImageInput from '../components/ModalImageInput';
import SingleSelect from '../components/SingleSelect';
import MultiSelect from '../components/MultiSelect';

interface ColumnAddFormProps {
  columnId: number;
  handleCloseModal: () => void;
  refreshCards: () => void;
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

function ToDoAddForm({ columnId, handleCloseModal, refreshCards }: ColumnAddFormProps) {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();
  const { dashboardId, memberData } = useDashboard();
  const hasErrors = Object.keys(errors).length > 0;

  const handleImageUpload = (url: string) => {
    setValue('imageUrl', url);
  };

  useEffect(() => {
    const defaultDueDate = new Date(new Date().setHours(new Date().getHours() + 1));
    setValue('dueDate', format(defaultDueDate, 'yyyy-MM-dd HH:mm'));
  }, [setValue]);

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
    refreshCards();
    handleCloseModal();
  };

  return (
    <div className="w-[504px] h-[907px]">
      <Title title="할 일 생성" />
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-8">
        <Controller
          control={control}
          rules={{
            required: '담당자는 필수입니다.',
          }}
          name="assigneeUserId"
          render={({ field, fieldState: { error } }) => (
            <div className="flex flex-col t:w-[217px] w-[287px]">
              <label htmlFor="assigneeUserId" className="text-lg font-medium text-black_333236 mb-[10px]">
                담당자
              </label>
              <SingleSelect
                {...field}
                type="member"
                defaultValue={{
                  value: 0,
                  label: '이름을 입력해 주세요',
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
              <div>{error && <p className="text-red-500 mt-[5px] mb-[-10px] ml-[3px]">{error.message}</p>}</div>
            </div>
          )}
        />
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
          rules={{
            required: '제목은 필수입니다.',
          }}
          name="description"
          render={({ field, fieldState: { error } }) => (
            <>
              <Input text="설명 *" id="description" placeholder="설명을 입력해 주세요" {...field} />
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
                selected={
                  field.value ? new Date(field.value) : new Date(new Date().setHours(new Date().getHours() + 1))
                }
                onChange={(date) => field.onChange(format(date as Date, 'yyyy-MM-dd HH:mm'))}
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
          render={({ field }) => <ModalImageInput columnId={columnId} onImageUpload={handleImageUpload} {...field} />}
        />
        <div className="flex justify-end">
          <button
            className="h-[48px] w-[120px] bg-[#FFFFFF] border-[1px] border-[gray_D9D9D9] rounded-[8px]  py-[14px]"
            type="button"
            onClick={handleCloseModal}
          >
            <span className="text-[16px] w-[28px] y-[19px] text-[gray_D9D9D9]">취소</span>
          </button>
          <button
            className={`h-[48px] w-[120px] bg-[#5534DA] rounded-[8px] py-[14px] ml-[12px] ${hasErrors ? 'opacity-50' : 'opacity-100'}`}
            type="submit"
            disabled={hasErrors}
          >
            <span className="text-[16px] w-[28px] y-[19px] text-white">생성</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ToDoAddForm;
