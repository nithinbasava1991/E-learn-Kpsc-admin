// assets
import {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconSettings,
  IconUser,
  IconPaperBag,
  IconCurrencyRupee,
  IconCertificate ,
  IconBook
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
  IconCurrencyRupee,
  IconCertificate,
  IconBook
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  type: 'group',
  children: [
    {
      id: 'mcq',
      title: 'MCQ Exam',
      type: 'collapse',
      icon: icons.IconBook,
      url: null,
      children: [
        {
          id: 'test',
          title: 'MCQ Test',
          type: 'item',
          url: '/dashboard/test',
          breadcrumbs: false
        },
        {
          id: 'practice',
          title: 'MCQ Practice',
          type: 'item',
          url: '/dashboard/practice',
          breadcrumbs: false
        },
        {
          id: 'questions',
          title: 'MCQ Questions',
          type: 'item',
          url: '/dashboard/questions',
          breadcrumbs: false
        },
      ]
    },
    {
      id: 'payments',
      title: 'Payments',
      type: 'item',
      url: '/dashboard/payments',
      icon: icons.IconCurrencyRupee,
      breadcrumbs: false
    },

    {
      id: 'settings',
      title: 'Settings',
      type: 'item',
      url: '/dashboard/settings',
      icon: icons.IconSettings,
      breadcrumbs: false
    }
  ]
};

export default utilities;
