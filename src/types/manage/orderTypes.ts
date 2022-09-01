export type OrderStatus = 'Paid' | string

export type OrderLayoutProps = {
  id: string | undefined
}

export type OrderClientType = {
  name: string
  address: string
  company: string
  country: string
  contact: string
  companyEmail: string
}

export type OrderType = {
  id: number
  name: string
  total: number
  avatar: string
  service: string
  dueDate: string
  address: string
  company: string
  country: string
  contact: string
  avatarColor?: string
  issuedDate: string
  companyEmail: string
  balance: string | number
  orderStatus: OrderStatus
}

export type OrderPaymentType = {
  iban: string
  totalDue: string
  bankName: string
  country: string
  swiftCode: string
}

export type SingleOrderType = {
  order: OrderType
  paymentDetails: OrderPaymentType
}
