'use client';

import classnames from 'classnames';
import { dashboardsStore } from '../../stores/dashboardsStore';
import CrownLogo from '../../public/images/DashboardCrown.svg';
import DashboardLogo from '../../public/images/DashboardIcon.svg';

export default function SideBarItem() {
  const dashboards = dashboardsStore((state) => state.dashboards);

  return (
    <>
      {dashboards.slice(0, 15).map((dashboard) => {
        const colorClass = classnames({
          'text-green-500': dashboard.color === 'green',
          'text-purple-500': dashboard.color === 'purple',
          'text-orange-500': dashboard.color === 'orange',
          'text-blue-500': dashboard.color === 'blue',
          'text-pink-500': dashboard.color === 'pink',
        });

        return (
          <div key={dashboard.id}>
            <DashboardLogo className={colorClass} />
            <p className={colorClass}>{dashboard.title}</p>
            {dashboard.createdByMe && <CrownLogo className={colorClass} />}
          </div>
        );
      })}
    </>
  );
}
