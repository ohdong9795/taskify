import serverInstance from '@/utils/axiosServer';
import { getColumnsCommon } from '../common';

// eslint-disable-next-line import/prefer-default-export
export const getColumns = (query: { dashboardId: number }) => getColumnsCommon(serverInstance, query);
