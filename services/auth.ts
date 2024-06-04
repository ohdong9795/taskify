import axios, { AxiosError } from 'axios';

const BASE_URL = 'https://sp-taskify-api.vercel.app/5-4';

export const register = async ({
  email,
  nickname,
  password,
}: {
  email: string;
  nickname: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, {
      email,
      nickname,
      password,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.status.toString();
      throw new AxiosError(errorCode);
    }

    throw new Error('An unexpected error occurred');
  }
};

export const login = async ({ email, password }: { email: string; password: string }) => {
  const response = await axios.post(`${BASE_URL}/auth/login`, {
    email,
    password,
  });

  return response.data;
};
