import { create } from 'zustand';

const useAuthStore = create((set) => ({
  accessToken: null,
  setTokens: (accessToken: string) => set({ accessToken }),
  clearTokens: () => set({ accessToken: null }),
}));

export default useAuthStore;
