import Input from '@/components/common/Input';
import { Controller, useForm } from 'react-hook-form';

const login = () => {};

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(login)}>
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
          <Input
            id="email"
            type="email"
            hasError={errors.email !== undefined}
            placeholder="이메일을 입력하세요"
            {...field}
          />
        )}
      />
      {errors.email && typeof errors.email.message === 'string' && <div>{errors.email.message}</div>}
      <label htmlFor="password">비밀번호</label>
      <Controller
        control={control}
        name="password"
        rules={{ required: '비밀번호를 입력해 주세요.' }}
        render={({ field }) => (
          <Input
            id="password"
            type="password"
            hasError={errors.password !== undefined}
            placeholder="비밀번호를 입력하세요"
            {...field}
          />
        )}
      />
      {errors.password && typeof errors.password.message === 'string' && <div>{errors.password.message}</div>}
      <button type="submit">로그인</button>
    </form>
  );
}
