import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AuthStore {
  accessToken: string | null;
  setToken: (accessToken: string) => void;
  clearToken: () => void;
}

const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      accessToken: null,
      setToken: (accessToken: string) => set({ accessToken }),
      clearToken: () => set({ accessToken: null }),
    }),
    {
      name: 'accessTokenStorage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useAuthStore;
