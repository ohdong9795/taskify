import getInstance from '@/utils/instance';
import axios, { AxiosError } from 'axios';

export const login = async ({ email, password }: { email: string; password: string }) => {
  try {
    const response = await axios.post('/api/login', {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new AxiosError(error.response.data.message);
    }

    throw new AxiosError('An unexpected error occurred');
  }
};

export const updatePassword = async (body: { password: string; newPassword: string }) => {
  try {
    const instance = getInstance();
    const response = await instance.put('/auth/password', body);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};
