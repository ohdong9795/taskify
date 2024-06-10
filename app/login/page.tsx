import LoginForm from '@/components/auth/LoginForm';
import Header from '@/components/auth/Header';
import Footer from '@/components/auth/Footer';

export default function Login() {
  return (
    <>
      <Header msg="오늘도 만나서 반가워요!" />
      <LoginForm />
      <Footer type="signin" />
    </>
  );
}
