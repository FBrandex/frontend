export const rows = [
  {
    id: 1,
    title: 'Activate Account',
    description: 'Provide first access to a new client',
    recipient: '{clientEmail}',
    content: 'Olá {clientName}. Confirmamos a sua inscrição para participar da X PROP! Para providenciarmos o seu acesso ao nosso portal, precisamos que você acesse através do link e ative sua conta.',
    attachment: ''
  },
  {
    id: 2,
    title: 'New Challenge',
    description: 'Confirmation of a new challenge purchased',
    recipient: '{clientEmail}',
    content: 'Olá {clientName}. Confirmamos que você adquiriu o desafio {challengeTitle}. Para providenciarmos o seu acesso à plataforma de negociação, precisamos que você acesse ao portal da X PROP e ative o seu plano.',
    attachment: ''
  },
  {
    id: 3,
    title: 'Enable Forex Challenge',
    description: 'Client requesting activation of a new Forex challenge.',
    recipient: '{adminEmail}',
    content: 'Foi solicitada a ativação de um plano Forex. Após ativar a plataforma, entre no Painel X PROP e Clique em Habilitar Plano na área do Trader.',
    attachment: ''
  },
  {
    id: 4,
    title: 'Enable Platform',
    description: 'Request a new sub-account from the Broker.',
    recipient: '{brokerEmail}',
    content: 'Solicitamos a ativação da plataforma abaixo (SOMENTE conta de Simulação) para o seguinte usuário:',
    attachment: ''
  },
  {
    id: 5,
    title: 'Cancel Challenge - Trader',
    description: 'Notify client about challenge cancelation',
    recipient: '{clientEmail}',
    content: 'Olá {clientName}. Informamos que o seu plano foi cancelado pelo seguinte motivo: {cancelReason}',
    attachment: ''
  },
  {
    id: 6,
    title: 'Cancel Challenge - Broker',
    description: 'Request the broker to cancel sub-account',
    recipient: '{brokerEmail}',
    content: 'Solicitamos cancelamento da plataforma para seguinte sub-conta: {subAccount}',
    attachment: ''
  }
]
