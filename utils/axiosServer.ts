import axios, { AxiosError } from 'axios';
import { cookies } from 'next/headers';

const serverInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

serverInstance.interceptors.request.use(
  (config) => {
    const token = cookies().get('token');
    if (!token) {
      return Promise.reject(new AxiosError('Unauthorized', '401'));
    }
    if (token && config.headers) {
      config.headers.set('Authorization', `Bearer ${token.value}`);
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default serverInstance;
