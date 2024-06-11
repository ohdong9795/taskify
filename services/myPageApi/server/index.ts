import instance from '@/utils/axiosServer';
import axios, { AxiosError } from 'axios';
import { cookies } from 'next/headers';

const getCookie = () => {
  const cookieStore = cookies();
  return cookieStore.get('token');
};


async function getUserProfile() {
  const token = getCookie();
  try {
    const { data } = await instance.get('/user/me', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token?.value}`,
      },
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }

    throw new AxiosError('An unexpected error occurred');
  }
}

export default getUserProfile;