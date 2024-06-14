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

interface PasswordFormInputs {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export default function PasswordChangeForm() {
  const { control, handleSubmit, watch, formState: { errors }, setError } = useForm<PasswordFormInputs>({ mode: 'onBlur' });

  const mutation = useMutation(
    updatePassword,
    {
      onSuccess: () => {
        toast('비밀번호가 성공적으로 변경되었습니다.', {
          position: 'top-center',
          autoClose: 1500,
          draggable: true,
          theme: 'dark',
        });
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
    }
  );

  const onSubmit = useCallback(
    (data: PasswordFormInputs) => {
      mutation.mutate({ password: data.currentPassword, newPassword: data.newPassword });
    },
    [mutation]
  );

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="mobile:w-[28.4rem] tablet:w-[54.4rem] flex flex-col ml-[1.7rem] w-[62rem] h-[45rem] bg-white rounded-lg justify-center align-center px-[2.8rem] justify-around">
        <div className="text-zinc-800 text-[2.4rem] font-bold font-['Pretendard']">비밀번호 변경</div>
        <div className="flex flex-col">
          <label className="text-zinc-800 text-[1.8rem] font-medium font-['Pretendard']" htmlFor="currentPassword">
            현재 비밀번호
          </label>
          <Controller
            control={control}
            name="currentPassword"
            rules={FORM_OPTIONS.currentPassword.rules}
            render={({ field }) => (
              <input
                id="currentPassword"
                className="basicinput mb-[2rem]"
                type="password"
                placeholder="현재 비밀번호 입력"
                {...field}
              />
            )}
          />
          {errors.currentPassword && <p className="text-red-500">{errors.currentPassword.message}</p>}
          
          <label className="text-zinc-800 text-[1.8rem] font-medium font-['Pretendard']" htmlFor="newPassword">
            새 비밀번호
          </label>
          <Controller
            control={control}
            name="newPassword"
            rules={FORM_OPTIONS.newPassword.rules}
            render={({ field }) => (
              <input
                id="newPassword"
                className="basicinput placeholder-gray-400 mb-[2rem]"
                type="password"
                placeholder="새 비밀번호 입력"
                {...field}
              />
            )}
          />
          {errors.newPassword && <p className="text-red-500">{errors.newPassword.message}</p>}
          
          <label className="text-zinc-800 text-[1.8rem] font-medium font-['Pretendard']" htmlFor="confirmNewPassword">
            새 비밀번호 확인
          </label>
          <Controller
            control={control}
            name="confirmNewPassword"
            rules={{
              required: '새 비밀번호를 다시 입력해주세요.',
              validate: value => value === watch('newPassword') || '비밀번호가 일치하지 않습니다.'
            }}
            render={({ field }) => (
              <input
                id="confirmNewPassword"
                className="basicinput text-gray-400 font-['Pretendard'] mb-[2rem]"
                type="password"
                placeholder="새 비밀번호 입력"
                {...field}
              />
            )}
          />
          {errors.confirmNewPassword && <p className="text-red-500">{errors.confirmNewPassword.message}</p>}
          
          <Button
            variant="primary"
            customStyles="w-[8.4rem] h-[3.2rem] text-[1.4rem] rounded-[0.4rem] ml-auto mb-[2rem]"
            type="submit"
            disabled={!watch('currentPassword') || !watch('newPassword') || !watch('confirmNewPassword')}
          >
            변경
          </Button>
        </div>
      </form>
    </div>
  );
}
