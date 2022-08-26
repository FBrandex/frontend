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

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      icon: HomeOutline,
      path: '/home'
    },
    {
      title: 'Cadastros',
      icon: DatabaseEditOutline,
      children: [
        {
          title: 'Vendas',
          path: '/manage/orders/list',
        },
        {
          title: 'Usuários',
          path: '/manage/users/list',
        },
        {
          title: 'Corretoras',
          path: '/manage/brokers/list',
        },
        /* {
          title: 'Subconta',
          path: '/manage/sub-account',
        }, */
        {
          title: 'Categorias de Produto',
          path: '/manage/products-groups/list',
        },
        {
          title: 'Produtos',
          path: '/manage/products/list',
        },
        {
          title: 'Imports',
          children: [
            {
              title: 'Performance',
              path: '/manage/imports/performance',
            },
            {
              title: 'Plataforma',
              path: '#',
            },
          ]
        },
        {
          title: 'E-mails',
          path: '/manage/emails/list',
        },
      ]
    },
    {
      title: 'Desafios',
      icon: ThumbsUpDownOutline,
      children: [
        {
          title: 'Habilitar',
          path: '/test-account/enable',
        },
        {
          title: 'Desabilitar',
          path: '/test-account/disable',
        },
        {
          title: 'Resetar',
          path: '/test-account/reset',
        },
        {
          title: 'Reinicar',
          path: '/test-account/restart',
        },
        {
          title: 'Gestão de Performance',
          path: '/test-account/performance',
        },
        {
          title: 'Meta Atingida',
          path: '/test-account/approved',
        },
        {
          title: 'Expirados',
          path: '/test-account/expired',
        },
      ]
    },
    {
      title: 'Conta Real',
      icon: Finance,
      children: [
        {
          title: 'Entrevista',
          path: '/real-account/interview',
        },
        {
          title: 'Habilitar',
          path: '/real-account/enable',
        },
        {
          title: 'Desabilitar',
          path: '/real-account/disable',
        },
        {
          title: 'Histórico de Evidência',
          path: '/real-account/evidence'
        },
        {
          title: 'Gestão de Performance',
          path: '/real-account/performance'
        },
      ]
    },
    {
      title: 'Financeiro',
      icon: CurrencyUsd,
      children: [
        {
          title: 'Repasses',
          path: '/finance/transfers',
        },
      ],
    },
    {
      title: 'Configurações',
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
      title: 'Controle de Acesso',
      icon: ShieldOutline,
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
    },
  ]
}

export default navigation
