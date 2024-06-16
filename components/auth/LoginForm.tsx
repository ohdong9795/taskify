'use client';

import { Controller, useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { login } from '@/services/client/auth';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import FORM_OPTIONS from '@/constants/formOption';
import useAuthStore from '@/stores/authStore';
import ErrorMsg from './ErrorMsg';
import AuthInput from './Input';

interface LoginData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginData>({ mode: 'onBlur' });
  const { setUser, setToken, accessToken } = useAuthStore();

  if (accessToken) {
    router.replace('/mydashboard');
  }

  const mutation = useMutation(login, {
    onSuccess: (data) => {
      setUser(data.user);
      setToken(data.accessToken);
      router.replace('/mydashboard');
    },
    onError: (error: AxiosError) => {
      toast(error.message, {
        position: 'top-center',
        autoClose: 1500,
        draggable: true,
        theme: 'dark',
      });
    },
  });

  const submit = useCallback(
    (data: LoginData) => {
      mutation.mutate({ email: data.email, password: data.password });
    },
    [mutation],
  );

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="flex flex-col gap-[16px]">
        <div>
          <label htmlFor={FORM_OPTIONS.email.name}>이메일</label>
          <Controller
            control={control}
            name={FORM_OPTIONS.email.name}
            rules={FORM_OPTIONS.email.rules}
            render={({ field }) => (
              <AuthInput
                id={FORM_OPTIONS.email.name}
                usage="email"
                hasError={errors.email !== undefined}
                placeholder={FORM_OPTIONS.email.placeholder}
                {...field}
              />
            )}
          />
          {errors.email && typeof errors.email.message === 'string' && <ErrorMsg msg={errors.email.message} />}
        </div>
        <div>
          <label htmlFor={FORM_OPTIONS.password.name}>비밀번호</label>
          <Controller
            control={control}
            name={FORM_OPTIONS.password.name}
            rules={FORM_OPTIONS.password.rules}
            render={({ field }) => (
              <AuthInput
                id={FORM_OPTIONS.password.name}
                usage="password"
                hasError={errors.password !== undefined}
                placeholder={FORM_OPTIONS.password.placeholder}
                {...field}
              />
            )}
          />
          {errors.password && typeof errors.password.message === 'string' && <ErrorMsg msg={errors.password.message} />}
        </div>
        <button
          className="w-full h-[50px] rounded-lg disabled:bg-gray_9FA6B2 bg-violet_5534DA text-[18px] text-white hover:bg-violet-500"
          type="submit"
          disabled={!isValid}
        >
          로그인
        </button>
      </div>
    </form>
  );
}
