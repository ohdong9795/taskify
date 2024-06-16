import useAuthStore from '@/stores/authStore';
import axios from 'axios';

const clientInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

clientInstance.interceptors.request.use(
  (config) => {
    const { accessToken } = useAuthStore.getState();
    if (accessToken && config.headers) {
      config.headers.set('Authorization', `Bearer ${accessToken}`);
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default clientInstance;
