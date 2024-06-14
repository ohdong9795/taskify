'use client';

import Title from '@/components/Modal/components/Title';
import Input from '@/components/Modal/components/Input';
import { inviteDashboard } from '@/services/client/dashboards';
import { Controller, useForm } from 'react-hook-form';
import FORM_OPTIONS from '@/constants/formOption';
import { useRouter } from 'next/navigation';

interface InviteFormProp {
  dashboardId: number;
}

function InviteForm({ dashboardId }: InviteFormProp) {
  const router = useRouter();
  const { handleSubmit, control } = useForm<{ email: string }>();

  const handleInvite = async ({ email }: { email: string }) => {
    await inviteDashboard({ dashboardId, email });
    router.refresh();
  };

  return (
    <div className="max-w-[540px]">
      <Title title="초대하기" />
      <form className="flex flex-col relative" onSubmit={handleSubmit(handleInvite)}>
        <Controller
          control={control}
          name={FORM_OPTIONS.email.name}
          rules={FORM_OPTIONS.email.rules}
          render={({ field }) => (
            <Input
              text="이메일"
              type={FORM_OPTIONS.email.name}
              id={FORM_OPTIONS.email.name}
              placeholder="초대할 멤버의 이메일을 입력하세요"
              {...field}
            />
          )}
        />
        <button type="submit">초대</button>
      </form>
    </div>
  );
}

export default InviteForm;
