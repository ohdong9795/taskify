'use client';

import LoginForm from '@/components/login/LoginForm';
import LoginHeader from '@/components/login/LoginHeader';

export default function Login() {
  return (
    <>
      <LoginHeader msg="오늘도 만나서 반가워요!" />
      <LoginForm />
    </>
  );
}
