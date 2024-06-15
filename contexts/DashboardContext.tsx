import { MemberData } from '@/types/user/column';
import React, { createContext, useContext, ReactNode, useMemo } from 'react';

interface DashboardContextType {
  dashboardId: number;
  memberData: MemberData;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};

interface DashboardProviderProps {
  children: ReactNode;
  dashboardId: number;
  memberData: MemberData;
}

export function DashboardProvider({ children, dashboardId, memberData }: DashboardProviderProps) {
  const value = useMemo(
    () => ({
      dashboardId,
      memberData,
    }),
    [dashboardId, memberData],
  );

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
}
