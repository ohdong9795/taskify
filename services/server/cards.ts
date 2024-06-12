import serverInstance from '@/utils/axiosServer';
import { getCardsCommon, getCardByIdCommon } from '../common';

export const getCards = (query: { size?: number; cursorId?: number; columnId: number }) =>
  getCardsCommon(serverInstance, query);

export const getCardById = (query: { cardId: number }) => getCardByIdCommon(serverInstance, query);
