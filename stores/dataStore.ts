import { Dashboard } from '@/types/user/dashboard';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface DataStore {
  dashboards: Dashboard[] | null;
  setDashboards: (dashboards: Dashboard[]) => void;
}

const useDataStore = create(
  persist<DataStore>(
    (set) => ({
      dashboards: null,
      setDashboards: (dashboards: Dashboard[]) => set({ dashboards }),
    }),
    {
      name: 'dashboardStorage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useDataStore;
