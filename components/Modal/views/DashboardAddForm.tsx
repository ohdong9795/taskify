'use client';

import postCreateDashboard from '@/services/dashboardApi/client';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Title from '@/components/Modal/components/Title';
import Input from '@/components/Modal/components/Input';
import ColorSelectInput from '@/components/Modal/components/ColorSelectInput';

interface FormValues {
  newDashboardName: string;
  color: string;
}

function DashboardAddForm() {
  const { handleSubmit, control } = useForm<FormValues>();

  const handlePost: SubmitHandler<FormValues> = ({ newDashboardName, color }) => {
    postCreateDashboard({ title: newDashboardName, color });
  };

  return (
    <div className="max-w-[540px]">
      <Title title="새로운 대시보드" />
      <form className="flex flex-col" onSubmit={handleSubmit(handlePost)}>
        <Controller
          control={control}
          name="newDashboardName"
          render={({ field }) => (
            <Input
              type="text"
              text="대시보드 이름"
              id="newDashboardName"
              placeholder="새로운 대시보드 이름"
              {...field}
            />
          )}
        />
        <Controller control={control} name="color" render={({ field }) => <ColorSelectInput field={field} />} />
        {/* 버튼 완료되면 추후 수정 */}
        <button type="submit">생성</button>
      </form>
    </div>
  );
}

export default DashboardAddForm;
