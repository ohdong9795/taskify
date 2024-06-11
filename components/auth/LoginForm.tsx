'use client';

import { Controller, useForm } from 'react-hook-form';
import { useCallback, useEffect } from 'react';
import { login } from '@/services/auth';
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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ mode: 'onBlur' });

  const { accessToken, setToken } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (accessToken) {
      router.push('/mydashboard');
    }
  }, [accessToken, router]);

  const mutation = useMutation(login, {
    onSuccess: (data) => {
      setToken(data.accessToken);
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
        <button className="w-full h-[50px] rounded-lg bg-gray_9FA6B2 text-[18px] text-white" type="submit">
          로그인
        </button>
      </div>
    </form>
  );
}
