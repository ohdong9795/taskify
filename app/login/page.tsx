'use client';

import LoginForm from '@/components/auth/LoginForm';
import AuthHeader from '@/components/auth/AuthHeader';
import AuthFooter from '@/components/auth/AuthFooter';

export default function Login() {
  return (
    <>
      <AuthHeader msg="오늘도 만나서 반가워요!" />
      <LoginForm />
      <AuthFooter type="signin" />
    </>
  );
}
