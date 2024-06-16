import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// eslint-disable-next-line import/prefer-default-export
export async function GET() {
  const cookieStore = cookies();
  const allCookies = cookieStore.getAll();

  allCookies.forEach((cookie) => {
    cookieStore.set(cookie.name, '', { expires: new Date(0) });
  });

  return NextResponse.json({ message: 'All cookies have been deleted' });
}
