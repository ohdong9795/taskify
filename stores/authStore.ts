import { create } from 'zustand';

interface ModalState {
  status: boolean;
  name: string;
}

interface AuthStore {
  accessToken: string | null;
  setToken: (accessToken: string) => void;
  clearToken: () => void;
  modal: ModalState;
  setModal: (modal: ModalState) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  accessToken: null,
  setToken: (accessToken: string) => set({ accessToken }),
  clearToken: () => set({ accessToken: null }),
  modal: { status: false, name: '' },
  setModal: (modal: ModalState) => set({ modal }),
}));

export default useAuthStore;

