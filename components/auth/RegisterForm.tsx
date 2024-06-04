import { Controller, useForm } from 'react-hook-form';
import { register } from '@/services/auth';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import ErrorMsg from './ErrorMsg';
import AuthInput from './AuthInput';

export default function RegisterForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm({ mode: 'onBlur' });

  const router = useRouter();

  const mutation = useMutation(register, {
    onSuccess: () => {
      const successCallback = () => {
        router.push('/login');
      };
      toast('가입이 완료되었습니다.', {
        position: 'top-center',
        autoClose: 1500,
        draggable: true,
        theme: 'dark',
        onClick: successCallback,
        onClose: successCallback,
      });
    },
    onError: (error: AxiosError) => {
      if (error.message === '409') {
        setError('email', { message: '이미 사용중인 이메일입니다.' });
      } else if (error.message === '400') {
        setError('email', { message: '이메일 형식으로 작성해주세요.' });
      }
    },
  });

  const submit = useCallback(
    (data: any) => {
      mutation.mutate({ email: data.email, nickname: data.nickName, password: data.password });
    },
    [mutation],
  );

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="flex flex-col gap-[16px]">
        <div>
          <label htmlFor="email">이메일</label>
          <Controller
            control={control}
            name="email"
            rules={{
              required: '이메일을 입력해 주세요.',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: '올바른 이메일 주소가 아닙니다.',
              },
            }}
            render={({ field }) => (
              <AuthInput
                id="email"
                type="email"
                hasError={errors.email !== undefined}
                placeholder="이메일을 입력하세요"
                {...field}
              />
            )}
          />
          {errors.email && typeof errors.email.message === 'string' && <ErrorMsg msg={errors.email.message} />}
        </div>
        <div>
          <label htmlFor="nickName">닉네임</label>
          <Controller
            control={control}
            name="nickName"
            rules={{
              required: '닉네임을 입력해 주세요.',
            }}
            render={({ field }) => (
              <AuthInput
                id="nickName"
                type="email"
                hasError={errors.nickName !== undefined}
                placeholder="닉네임을 입력하세요"
                {...field}
              />
            )}
          />
          {errors.nickName && typeof errors.nickName.message === 'string' && <ErrorMsg msg={errors.nickName.message} />}
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <Controller
            control={control}
            name="password"
            rules={{
              required: '비밀번호를 입력해 주세요.',
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/,
                message: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
              },
            }}
            render={({ field }) => (
              <AuthInput
                id="password"
                type="password"
                hasError={errors.password !== undefined}
                placeholder="비밀번호를 입력하세요"
                {...field}
              />
            )}
          />
          {errors.password && typeof errors.password.message === 'string' && <ErrorMsg msg={errors.password.message} />}
        </div>
        <div>
          <label htmlFor="password">비밀번호 확인</label>
          <Controller
            control={control}
            name="passwordCheck"
            rules={{
              required: '비밀번호를 입력해 주세요.',
              validate: () => {
                if (watch('password') !== watch('passwordCheck')) {
                  return '비밀번호가 일치하지 않습니다';
                }

                return true;
              },
            }}
            render={({ field }) => (
              <AuthInput
                id="passwordCheck"
                type="password"
                hasError={errors.passwordCheck !== undefined}
                placeholder="비밀번호와 일치하는 값을 입력해 주세요."
                {...field}
              />
            )}
          />
          {errors.passwordCheck && typeof errors.passwordCheck.message === 'string' && (
            <ErrorMsg msg={errors.passwordCheck.message} />
          )}
        </div>
        <button className="w-full h-[50px] rounded-lg bg-gray_9FA6B2 text-[18px] text-white" type="submit">
          가입하기
        </button>
      </div>
    </form>
  );
}
