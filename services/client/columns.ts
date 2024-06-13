import clientInstance from '@/utils/axiosClient';
import { createColumnCommon, getColumnsCommon, updateColumnCommon, deleteColumnCommon } from '../common';

export const createColumn = (body: { title: number; dashboardId: number }) => createColumnCommon(clientInstance, body);

export const getColumns = (query: { dashboardId: number }) => getColumnsCommon(clientInstance, query);

export const updateColumn = (body: { columnId: number; title: string }) => updateColumnCommon(clientInstance, body);

export const deleteColumn = (query: { columnId: number }) => deleteColumnCommon(clientInstance, query);
