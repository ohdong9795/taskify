import Link from 'next/link';

function CustomDiv({ children }: { children: React.ReactNode }) {
  return <div className="w-full text-center mt-[16px]">{children}</div>;
}

export default function AuthFooter({ type }: { type: 'signin' | 'signup' }) {
  if (type === 'signin') {
    return (
      <CustomDiv>
        회원이 아니신가요?{' '}
        <Link href="signup" className="text-violet_5534DA text-decoration-line: underline">
          회원가입하기
        </Link>
      </CustomDiv>
    );
  }

  return (
    <CustomDiv>
      이미 가입하셨나요?{' '}
      <Link href="login" className="text-violet_5534DA text-decoration-line: underline">
        로그인하기
      </Link>
    </CustomDiv>
  );
}
