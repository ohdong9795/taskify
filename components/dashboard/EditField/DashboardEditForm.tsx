'use client';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { updateDashboard } from '@/services/client/dashboards';
import Title from '@/components/Modal/components/Title';
import Input from '@/components/Modal/components/Input';
import ColorSelectInput from '@/components/Modal/components/ColorSelectInput';
import { Dashboard } from '@/types/user/dashboard';
import { useRouter } from 'next/navigation';

interface FormValues {
  newDashboardName: string;
  color: string;
}

interface DashboardEditFormProps {
  dashboard?: Dashboard;
  dashboardId: number;
}

function DashboardEditForm({ dashboard, dashboardId }: DashboardEditFormProps) {
  const router = useRouter();
  const { handleSubmit, control } = useForm<FormValues>();

  const handlePost: SubmitHandler<FormValues> = async ({ newDashboardName, color }) => {
    await updateDashboard({ dashboardId, title: newDashboardName, color });
    router.refresh();
  };

  return (
    <section className="max-w-[540px] bg-white p-7 rounded-lg">
      <Title title={dashboard?.title} />
      <form className="flex flex-col" onSubmit={handleSubmit(handlePost)}>
        <Controller
          control={control}
          name="newDashboardName"
          render={({ field }) => (
            <Input
              type="text"
              text="대시보드 이름"
              id="newDashboardName"
              placeholder="수정할 대시보드 이름"
              {...field}
            />
          )}
        />
        <Controller control={control} name="color" render={({ field }) => <ColorSelectInput field={field} />} />
        <div className="flex justify-end">
          <button
            className="bg-violet_5534DA hover:bg-violet-500 text-white rounded-lg py-[14px] px-[46px] text-center"
            type="submit"
          >
            수정
          </button>
        </div>
      </form>
    </section>
  );
}

export default DashboardEditForm;
