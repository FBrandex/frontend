// ** Icon imports
import {
  CurrencyUsd,
  DatabaseEditOutline,
  Finance,
  HomeOutline,
  ShieldOutline,
  ThumbsUpDownOutline,
  CogOutline
  
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
              path: '#',
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
          path: '/test-account/list',
        },
        {
          title: 'Enable',
          path: '/test-account/enable',
        },
        {
          title: 'Disable',
          path: '/test-account/disable',
        },
        {
          title: 'Reset',
          path: '/test-account/reset',
        },
        {
          title: 'Restart',
          path: '/test-account/restart',
        },
        {
          title: 'Performance Management',
          path: '/test-account/performance',
        },
        {
          title: 'Achieved Goal',
          path: '/test-account/approved',
        },
        {
          title: 'Expired',
          path: '/test-account/expired',
        },
      ]
    },
    {
      title: 'Real Account',
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
      title: 'Finacial',
      icon: CurrencyUsd,
      children: [
        {
          title: 'Repasses',
          path: '/finance/transfers',
        },
      ],
    },
    {
      title: 'Settings',
      icon: CogOutline,
      children: [
        {
          title: 'Permissões',
          children: [
            {
              title: 'Funções',
              path: '/settings/roles',
            },
            {
              title: 'Atribuições',
              path: '/settings/permissions',
            },
          ]
        },
      ],
    },
    {
      title: 'Access Control',
      icon: ShieldOutline,
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
    },
  ]
}

export default navigation
