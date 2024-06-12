import clientInstance from '@/utils/axiosClient';
import serverInstance from '@/utils/axiosServer';

export default function getInstance() {
  const isServerSide = typeof window === 'undefined';

  const instance = isServerSide ? serverInstance : clientInstance;

  return instance;
}
