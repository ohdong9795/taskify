import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // 쿠키에서 토큰 확인
  const token = req.cookies.get('token');

  // 요청 경로 확인
  const { pathname } = req.nextUrl;

  // '/' 경로 처리
  if (pathname === '/') {
    if (token) {
      // 토큰이 있는 경우 /mydashboard로 리다이렉트
      return NextResponse.redirect(new URL('/mydashboard', req.url));
    } // 토큰이 없는 경우 요청을 그대로 진행
    return NextResponse.next();
  }

  if (!token) {
    // 토큰이 없는 경우 로그인 페이지로 리다이렉트
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // 토큰이 있는 경우 요청을 그대로 진행
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|login|signup).*)'],
};
