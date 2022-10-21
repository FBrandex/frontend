// ** Icon imports
import {
  CurrencyUsd,
  DatabaseEditOutline,
  Finance,
  HomeOutline,
  ThumbsUpDownOutline,
  CogOutline,
  Web
  
} from 'mdi-material-ui'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

// ** Menu vertical
const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      icon: HomeOutline,
      path: '/home'
    },
    {
      title: 'Manage',
      icon: DatabaseEditOutline,
      children: [
        {
          title: 'Orders',
          path: '/manage/order/list',
        },
        {
          title: 'Users',
          path: '/manage/user/list',
        },
        {
          title: 'Brokers',
          path: '/manage/broker/list',
        },
        /* {
          title: 'Subconta',
          path: '/manage/sub-account',
        }, */
        {
          title: 'Category',
          path: '/manage/product-group/list',
        },
        {
          title: 'Products',
          path: '/manage/product/list',
        },
        {
          title: 'Imports',
          children: [
            {
              title: 'Performance',
              path: '/manage/import/performance',
            },
            {
              title: 'Platform',
              path: '/manage/import/platform',
            },
          ]
        },
        {
          title: 'Emails',
          path: '/manage/email/list',
        },
      ]
    },
    {
      title: 'Evaluations',
      icon: ThumbsUpDownOutline,
      children: [
        {
          title: 'List',
          path: '/challenge/list',
        },
        {
          title: 'Enable',
          path: '/challenge/enable',
        },
        {
          title: 'Disable',
          path: '/challenge/disable',
        },
        {
          title: 'Reset',
          path: '/challenge/reset',
        },
        {
          title: 'Restart',
          path: '/challenge/restart',
        },
        {
          title: 'Performance Management',
          path: '/challenge/performance',
        },
        {
          title: 'Achieved Goal',
          path: '/challenge/approved',
        },
        {
          title: 'Expired',
          path: '/challenge/expired',
        },
      ]
    },
    {
      title: 'Funded Account',
      icon: Finance,
      children: [
        {
          title: 'Interview',
          path: '/real-account/interview',
        },
        {
          title: 'Enable',
          path: '/real-account/enable',
        },
        {
          title: 'Disable',
          path: '/real-account/disable',
        },
        {
          title: 'Evidence History',
          path: '/real-account/evidence'
        },
        {
          title: 'Performance Management',
          path: '/real-account/performance'
        },
      ]
    },
    {
      title: 'Financial',
      icon: CurrencyUsd,
      children: [
        {
          title: 'Transfers',
          path: '/finance/transfer',
        },
        {
          title: 'Reports',
          path: '/finance/report',
        }
      ],
    },
    {
      title: 'Site',
      icon: Web,
      path: '/site',
    },
    {
      title: 'Settings',
      icon: CogOutline,
      children: [
        {
          title: 'Permissions',
          children: [
            {
              title: 'Roles',
              path: '/setting/roles',
            },
            {
              title: 'Assignments',
              path: '/setting/permissions',
            },
          ]
        },
        {
          title: 'SMTP',
          path: '/setting/smtp',
        },
        {
          title: 'Parameters',
          path: '/setting/parameters',
        }
      ],
    },
    /* {
      title: 'Access Control',
      icon: ShieldOutline,
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
    } */
  ]
}

export default navigation
