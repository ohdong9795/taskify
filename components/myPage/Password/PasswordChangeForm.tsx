'use client';

import React, { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import Button from '@/components/common/Button/Button';
import FORM_OPTIONS from '@/constants/formOption';
import { updatePassword } from '@/services/client/auth';
import Input from '@/components/auth/Input';

interface PasswordFormInputs {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export default function PasswordChangeForm() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    reset,
  } = useForm<PasswordFormInputs>({
    mode: 'onBlur',
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
  });

  const mutation = useMutation(updatePassword, {
    onSuccess: () => {
      toast('비밀번호가 성공적으로 변경되었습니다.', {
        position: 'top-center',
        autoClose: 1500,
        draggable: true,
        theme: 'dark',
      });
      reset(); // 입력 필드 초기화
    },
    onError: (error: AxiosError) => {
      toast('비밀번호 변경 중 오류가 발생했습니다.', {
        position: 'top-center',
        autoClose: 1500,
        draggable: true,
        theme: 'dark',
      });
      if (error.response && error.response.status === 400) {
        setError('currentPassword', { message: '현재 비밀번호가 잘못되었습니다.' });
      }
    },
  });

  const onSubmit = useCallback(
    (data: PasswordFormInputs) => {
      mutation.mutate({ password: data.currentPassword, newPassword: data.newPassword });
    },
    [mutation],
  );

  const formStyle =
    'flex flex-col bg-white p:w-[620px] t:w-[544px] w-[284px] t:h-[500px] h-[450px] ml-[20px] mt-[24px] rounded-lg mb-[12px] pr-[2.8rem]';
  const labelStyle = 'font-medium text-black_333236 t:text-[18px] text-[16px] mb-[10px] t:mt-[20px] mt-[16px]';
  const buttonStyle =
    'bg-violet_5534DA w-[84px] t:h-[32px] h-[28px] text-white t:mr-[28px]  mr-[20px] t:mb-[28px] mb-[20px] font-medium rounded text-[12px] mt-[24px]';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formStyle}>
      <div className="t:ml-[28px] t:mt-[32px] ml-[20px] mt-[28px]">
        <h2 className="text-[24px] text-black_333236 font-bold t:mb-[32px] mb-[24px]">비밀번호 변경</h2>
        <div className="flex-col flex gap-1">
          <label className={labelStyle} htmlFor="currentPassword">
            현재 비밀번호
          </label>
          <Controller
            control={control}
            name="currentPassword"
            rules={FORM_OPTIONS.currentPassword.rules}
            render={({ field }) => (
              <Input
                id="currentPassword"
                usage="password"
                placeholder="현재 비밀번호 입력"
                style={{ height: '48px' }}
                {...field}
              />
            )}
          />
          {errors.currentPassword && <p className="text-red-500">{errors.currentPassword.message}</p>}

          <label className={labelStyle} htmlFor="newPassword">
            새 비밀번호
          </label>
          <Controller
            control={control}
            name="newPassword"
            rules={FORM_OPTIONS.newPassword.rules}
            render={({ field }) => (
              <Input
                id="newPassword"
                usage="password"
                placeholder="새 비밀번호 입력"
                style={{ height: '48px' }}
                {...field}
              />
            )}
          />
          {errors.newPassword && <p className="text-red-500">{errors.newPassword.message}</p>}

          <label className={labelStyle} htmlFor="confirmNewPassword">
            새 비밀번호 확인
          </label>
          <Controller
            control={control}
            name="confirmNewPassword"
            rules={{
              required: '새 비밀번호를 다시 입력해주세요.',
              validate: (value) => value === watch('newPassword') || '비밀번호가 일치하지 않습니다.',
            }}
            render={({ field }) => (
              <Input id="confirmNewPassword" usage="password" placeholder="새 비밀번호 다시입력" {...field} />
            )}
          />
          {errors.confirmNewPassword && <p className="text-red-500">{errors.confirmNewPassword.message}</p>}
          <div className="flex justify-end h-screen">
            <Button
              variant="primary"
              customStyles={buttonStyle}
              type="submit"
              disabled={!watch('currentPassword') || !watch('newPassword') || !watch('confirmNewPassword')}
            >
              변경
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
