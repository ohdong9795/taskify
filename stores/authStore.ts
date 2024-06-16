import axios, { AxiosError } from 'axios';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface User {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

interface AuthStore {
  accessToken: string | null;
  user: User | null;
  setToken: (accessToken: string) => void;
  setUser: (user: User) => void;
  clearToken: () => void;
  clearUser: () => void;
  setLogout: () => void;
}

const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      accessToken: null,
      setToken: (accessToken: string) => set({ accessToken }),
      clearToken: () => set({ accessToken: null }),
      user: null,
      setUser: (user: User) => set({ user }),
      clearUser: () => set({ user: null }),
      setLogout: async () => {
        localStorage.clear();
        set({ user: null, accessToken: null });
        try {
          await axios.get('/api/logout');
        } catch (error) {
          throw new AxiosError();
        }
      },
    }),
    {
      name: 'accessTokenStorage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useAuthStore;
