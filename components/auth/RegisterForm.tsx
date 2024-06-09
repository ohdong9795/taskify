import { Controller, useForm } from 'react-hook-form';
import { register } from '@/services/auth';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import FORM_OPTIONS from '@/constants/formOption';
import ErrorMsg from './ErrorMsg';
import AuthInput from './Input';

interface RegisterData {
  email: string;
  nickName: string;
  password: string;
  passwordCheck: string;
  agreeCheckbox: string;
}

export default function RegisterForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm<RegisterData>({ mode: 'onBlur' });

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
    (data: RegisterData) => {
      mutation.mutate({ email: data.email, nickname: data.nickName, password: data.password });
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
          <label htmlFor="nickName">닉네임</label>
          <Controller
            control={control}
            name={FORM_OPTIONS.nickName.name}
            rules={FORM_OPTIONS.nickName.rules}
            render={({ field }) => (
              <AuthInput
                id={FORM_OPTIONS.nickName.name}
                usage="nickName"
                hasError={errors.nickName !== undefined}
                placeholder={FORM_OPTIONS.nickName.placeholder}
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
        <div>
          <label htmlFor="password">비밀번호 확인</label>
          <Controller
            control={control}
            name={FORM_OPTIONS.passwordCheck.name}
            rules={{
              ...FORM_OPTIONS.passwordCheck.rules,
              validate: () => {
                if (watch(FORM_OPTIONS.password.name) !== watch(FORM_OPTIONS.passwordCheck.name)) {
                  return FORM_OPTIONS.passwordCheck.validateMsg;
                }

                return true;
              },
            }}
            render={({ field }) => (
              <AuthInput
                id={FORM_OPTIONS.passwordCheck.name}
                usage="password"
                hasError={errors.passwordCheck !== undefined}
                placeholder={FORM_OPTIONS.passwordCheck.placeholder}
                {...field}
              />
            )}
          />
          {errors.passwordCheck && typeof errors.passwordCheck.message === 'string' && (
            <ErrorMsg msg={errors.passwordCheck.message} />
          )}
        </div>
        <div>
          <Controller
            control={control}
            name={FORM_OPTIONS.agreeCheckbox.name}
            rules={FORM_OPTIONS.agreeCheckbox.rules}
            render={({ field }) => (
              <div className="flex items-center">
                <AuthInput usage="checkbox" id={FORM_OPTIONS.agreeCheckbox.name} {...field} />
                <span className="ml-[8px]"> 이용약관에 동의합니다. </span>
              </div>
            )}
          />
          {errors.agreeCheckbox && typeof errors.agreeCheckbox.message === 'string' && (
            <ErrorMsg msg={errors.agreeCheckbox.message} />
          )}
        </div>
        <button className="w-full h-[50px] rounded-lg bg-gray_9FA6B2 text-[18px] text-white" type="submit">
          가입하기
        </button>
      </div>
    </form>
  );
}
