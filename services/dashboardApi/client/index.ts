import clientInstance from '@/utils/axiosClient';
import axios, { AxiosError } from 'axios';

interface PostParams {
  title: string;
  color: string;
}

export default async function postCreateDashboard({ title, color }: PostParams) {
  try {
    const { data } = await clientInstance.post(
      '/dashboards',
      { title, color },
      {
        method: 'POST',
      },
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }

    throw new AxiosError('An unexpected error occurred');
  }
}
