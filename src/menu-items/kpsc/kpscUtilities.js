// assets
import {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconSettings,
  IconUser,
  IconPaperBag,
  IconCurrencyRupee
} from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconSettings,
  IconUser,
  IconPaperBag,
  IconCurrencyRupee
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const kpscUtilities = {
  id: 'pages',
  title: 'Pages',
  type: 'group',
  children: [
    {
      id: 'kpsc',
      title: 'Kpsc',
      type: 'collapse',
      icon: icons.IconPaperBag,
      url: null,
      children: [
        {
          id: 'subject',
          title: 'Subject',
          type: 'item',
          url: '/kpsc/subject',
          breadcrumbs: false
        },
        {
          id: 'modules',
          title: 'Modules',
          type: 'item',
          url: '/kpsc/modules',
          breadcrumbs: false
        },
        {
          id: 'topics',
          title: 'Topics',
          type: 'item',
          url: '/kpsc/topics',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'masters',
      title: 'Masters',
      type: 'collapse',
      icon: icons.IconWindmill,
      url: null,
      children: [
        {
          id: 'jobPost',
          title: 'Job Post',
          type: 'item',
          url: '/kpsc/jobPost',
          breadcrumbs: false
        },
        {
          id: 'qualification',
          title: 'Qualification',
          type: 'item',
          url: '/kpsc/qualification',
          breadcrumbs: false
        },
        {
          id: 'occupation',
          title: 'Occupation',
          type: 'item',
          url: '/kpsc/occupation',
          breadcrumbs: false
        },
        // {
        //   id: 'category',
        //   title: 'Category',
        //   type: 'item',
        //   url: '/kpsc/category',
        //   breadcrumbs: false
        // },
        // {
        //   id: 'subCategory',
        //   title: 'Sub Category',
        //   type: 'item',
        //   url: '/kpsc/subCategory',
        //   breadcrumbs: false
        // }
        // {
        //   id: 'role',
        //   title: 'Role',
        //   type: 'item',
        //   url: '/kpsc/role',
        //   breadcrumbs: false
        // }
      ]
    },

    {
      id: 'payments',
      title: 'Payments',
      type: 'item',
      url: '/kpsc/payments',
      icon: icons.IconCurrencyRupee,
      breadcrumbs: false
    },
    {
      id: 'users',
      title: 'Users',
      type: 'item',
      url: '/kpsc/users',
      icon: icons.IconUser,
      breadcrumbs: false
    },
    {
      id: 'settings',
      title: 'Settings',
      type: 'item',
      url: '/kpsc/settings',
      icon: icons.IconSettings,
      breadcrumbs: false
    }
  ]
};

export default kpscUtilities;
