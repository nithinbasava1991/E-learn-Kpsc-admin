import React from 'react';
import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import NavGroup from './NavGroup';

import dashboardMenuItems from 'menu-items/dashboard';
import academyMenuItems from 'menu-items/academy';
import upSkillsMenuItems from 'menu-items/upSkills';
import ecommerceMenuItems from 'menu-items/ecommerce';

// Function to get menu items based on the current path
const getMenuItems = (path) => {
  if (path.startsWith('/dashboard')) {
    return dashboardMenuItems.items;
  } else if (path.startsWith('/ecommerce')) {
    return ecommerceMenuItems.items;
  } else if (path.startsWith('/academy')) {
    return academyMenuItems.items;
  } else if (path.startsWith('/upSkills')) {
    return upSkillsMenuItems.items;
  } else {
    return [];
  }
};

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
  const location = useLocation();
  const path = location.pathname;
  const menuItems = getMenuItems(path);

  const navItems = menuItems.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return <>{navItems}</>;
};

export default MenuList;
