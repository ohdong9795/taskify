import Footer from '@/components/auth/Footer';
import Header from '@/components/auth/Header';
import RegisterForm from '@/components/auth/RegisterForm';

export default function Login() {
  return (
    <>
      <Header msg="첫 방문을 환영합니다!" />
      <RegisterForm />
      <Footer type="signup" />
    </>
  );
}
