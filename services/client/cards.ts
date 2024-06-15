import clientInstance from '@/utils/axiosClient';
import { createCardCommon, getCardsCommon, updateCardCommon, getCardByIdCommon, deleteCardByIdCommon } from '../common';

export const createCard = (body: {
  assigneeUserId: number;
  dashboardId: number;
  columnId: number;
  title: string;
  description: string;
  dueDate: string;
  tags: string[];
  imageUrl?: string;
}) => createCardCommon(clientInstance, body);

export const getCards = (query: { size?: number; cursorId?: number; columnId: number }) =>
  getCardsCommon(clientInstance, query);

export const updateCard = (body: {
  cardId: number;
  columnId: number;
  assigneeUserId: number;
  title: string;
  description: string;
  dueDate: string;
  tags: string[];
  imageUrl?: string;
}) => updateCardCommon(clientInstance, body);

export const getCardById = (query: { cardId: number }) => getCardByIdCommon(clientInstance, query);

export const deleteCardById = (query: { cardId: number }) => deleteCardByIdCommon(clientInstance, query);
