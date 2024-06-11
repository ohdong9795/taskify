import instance from '@/utils/axiosServer';
import axios, { AxiosError } from 'axios';
import { cookies } from 'next/headers';

const getCookie = () => {
  const cookieStore = cookies();
  return cookieStore.get('token');
};

export async function getDashboards() {
  const token = getCookie();
  try {
    const { data } = await instance.get('/dashboards?navigationMethod=infiniteScroll&page=1&size=10', {
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

export async function getInvitations() {
  const token = getCookie();
  try {
    const { data } = await instance.get('/invitations', {
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


