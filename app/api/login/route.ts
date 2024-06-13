import axios, { AxiosError } from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// eslint-disable-next-line import/prefer-default-export
export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, { email, password });
    const { accessToken } = response.data;

    cookies().set('token', accessToken, {
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 3600 * 24,
    });

    return NextResponse.json(
      { message: 'POST request received', accessToken: response.data.accessToken },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return NextResponse.json({ error: new AxiosError(error.response.data.message) }, { status: 400 });
    }

    return NextResponse.json({ error: new AxiosError('An unexpected error occurred') }, { status: 500 });
  }
}
