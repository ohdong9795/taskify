import clientInstance from '@/utils/axiosClient';
import { loginCommon, updatePasswordCommon } from '../common';

export const login = (body: { email: string; password: string }) => loginCommon(body);
export const updatePassword = (body: { password: string; newPassword: string }) =>
  updatePasswordCommon(clientInstance, body);
