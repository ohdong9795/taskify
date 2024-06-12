import clientInstance from '@/utils/axiosClient';
import { createCardCommon, getCardsCommon, updateCardCommon, getCardByIdCommon, updateCardByIdCommon } from '../common';

export const createCard = (body: {
  assigneeUserId: number;
  dashboardId: number;
  columnId: number;
  title: string;
  description: string;
  dueDate: string;
  tags: string[];
  imageUrl: string;
}) => createCardCommon(clientInstance, body);

export const getCards = (query: { size?: number; cursorId?: number; columnId: number }) =>
  getCardsCommon(clientInstance, query);

export const updateCard = (body: {
  columnId: number;
  assigneeUserId: number;
  title: string;
  description: string;
  dueDate: string;
  tags: string[];
  imageUrl: string;
}) => updateCardCommon(clientInstance, body);

export const getCardById = (query: { cardId: number }) => getCardByIdCommon(clientInstance, query);

export const updateCardById = (query: { cardId: number }) => updateCardByIdCommon(clientInstance, query);
