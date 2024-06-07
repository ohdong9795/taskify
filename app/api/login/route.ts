import instance from '@/utils/axios';
import { AxiosError } from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// eslint-disable-next-line import/prefer-default-export
export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  try {
    const response = await instance.post('/auth/login', { email, password });
    const { accessToken } = response.data;

    cookies().set('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // HTTPS에서만 전송
      maxAge: 60 * 60 * 24, // 1일
      sameSite: 'strict',
      path: '/',
    });
    return NextResponse.json({ message: 'POST request received', data: response.data }, { status: 201 });
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return NextResponse.json({ error: new AxiosError(error.response.data.message) }, { status: 400 });
    }

    return NextResponse.json({ error: new AxiosError('An unexpected error occurred') }, { status: 500 });
  }
}
