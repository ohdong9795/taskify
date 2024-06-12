import clientInstance from '@/utils/axiosClient';

const getInstance = async () => {
  if (typeof window === 'undefined') {
    const { default: serverInstance } = await import('@/utils/axiosServer');
    return serverInstance;
  }
  return clientInstance;
};

export default getInstance;
