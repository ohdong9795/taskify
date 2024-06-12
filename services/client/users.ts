import clientInstance from '@/utils/axiosClient';
import { createUserCommon, getUserCommon, updateUserCommon } from '../common';

export const createUser = (body: { email: string; nickname: string; password: string }) =>
  createUserCommon(clientInstance, body);

export const getUser = () => getUserCommon(clientInstance);

export const updateUser = (body: { nickname: number; profileImageUrl: string }) =>
  updateUserCommon(clientInstance, body);
