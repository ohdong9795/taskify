import serverInstance from '@/utils/axiosServer';
import { getUserCommon } from '../common';

// eslint-disable-next-line import/prefer-default-export
export const getUser = () => getUserCommon(serverInstance);
