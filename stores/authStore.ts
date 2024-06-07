import { create } from 'zustand';

interface AuthStore {
  accessToken: string | null;
  setToken: (accessToken: string) => void;
  clearToken: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  accessToken: null,
  setToken: (accessToken: string) => set({ accessToken }),
  clearToken: () => set({ accessToken: null }),
}));

export default useAuthStore;
