import { Controller, useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { login } from '@/services/auth';
import { useRouter } from 'next/navigation';
import ErrorMsg from './ErrorMsg';
import AuthInput from './AuthInput';

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({ mode: 'onBlur' });

  const router = useRouter();

  const submit = useCallback(async (data: any) => {
    const result = await login({ email: data.email, password: data.password });
    if ('errorCode' in result) {
      if (result.errorCode === 400) {
        const errorMsg = '이메일 형식으로 작성해주세요.';
        setError('email', { message: errorMsg });
      }
      if (result.errorCode === 404) {
        // modal 존재하지 않는 유저입니다.
      }
    } else {
      // accessToken zustand 사용하기
      router.push('/mydashboard');
    }
  }, []);

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
          <label htmlFor="password">비밀번호</label>
          <Controller
            control={control}
            name="password"
            rules={{ required: '비밀번호를 입력해 주세요.' }}
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
        <button className="w-full h-[50px] rounded-lg bg-gray_9FA6B2 text-[18px] text-white" type="submit">
          로그인
        </button>
      </div>
    </form>
  );
}
