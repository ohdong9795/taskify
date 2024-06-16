'use client';

import { useForm, Controller } from 'react-hook-form';

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
  const { control, handleSubmit, setValue } = useForm<FormValues>();
  const { dashboardId, memberData } = useDashboard();

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
    refreshCards();
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
              <DatePicker
                dateFormat="yyyy-MM-dd HH:mm"
                shouldCloseOnSelect={false}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                minDate={new Date()}
                maxDate={new Date('2100-12-31')}
                selected={field.value ? new Date(field.value) : null}
                onChange={(date) => field.onChange(format(date as Date, 'yyyy-MM-dd HH:mm'))}
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
