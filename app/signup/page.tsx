'use client';

import AuthFooter from '@/components/auth/AuthFooter';
import AuthHeader from '@/components/auth/AuthHeader';
import RegisterForm from '@/components/auth/RegisterForm';

export default function Login() {
  return (
    <>
      <AuthHeader msg="첫 방문을 환영합니다!" />
      <RegisterForm />
      <AuthFooter type="signup" />
    </>
  );
}
