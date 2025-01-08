// assets
import { IconDashboard, IconLayoutDashboard } from '@tabler/icons-react';

// constant
const icons = { IconLayoutDashboard, IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const kpsc = {
  id: 'kpsc',
  title: 'Kpsc',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Kpsc',
      type: 'item',
      url: '/kpsc',
      icon: icons.IconLayoutDashboard,
      breadcrumbs: false
    }
  ]
};

export default kpsc;
