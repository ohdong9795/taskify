import { ColumnData, MemberData } from '@/types/user/column';
import React, { createContext, useContext, ReactNode, useMemo } from 'react';

interface DashboardContextType {
  dashboardId: number;
  memberData: MemberData;
  columnsData: ColumnData;
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
  columnsData: ColumnData;
}

export function DashboardProvider({ children, dashboardId, memberData, columnsData }: DashboardProviderProps) {
  const value = useMemo(
    () => ({
      dashboardId,
      memberData,
      columnsData,
    }),
    [dashboardId, memberData, columnsData],
  );

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
}
