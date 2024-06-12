import axios from 'axios';
import { cookies } from 'next/headers';

const serverInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

serverInstance.interceptors.request.use(
  (config) => {
    const token = cookies().get('token');
    if (token && config.headers) {
      config.headers.set('Authorization', `Bearer ${token.value}`);
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default serverInstance;
