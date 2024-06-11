import getInstance from '@/utils/instance';
import axios, { AxiosError } from 'axios';

export const createUser = async (body: { email: string; nickname: string; password: string }) => {
  try {
    const instance = getInstance();
    const response = await instance.post('/users', body);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

export const getUser = async (cookie?: { token: string }) => {
  try {
    const instance = getInstance();
    if (cookie) {
      instance.defaults.headers.common.Authorization = `Bearer ${cookie.token}`;
    }
    const response = await instance.get('/users/me');

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

export const updateUser = async (body: { nickname: number; profileImageUrl: string }) => {
  try {
    const instance = getInstance();
    const response = await instance.put('/users/me', body);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};

export const uploadColumnCardImage = async (body: { image: string }) => {
  try {
    const instance = getInstance();
    const response = await instance.post('users/me/image', body);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }
    throw new AxiosError('An unexpected error occurred');
  }
};
