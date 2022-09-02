// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

export type UserLayoutType = {
  id: string | undefined
}

export type UsersType = {
  id: number
  client_cod: string
  fullName: string
  username: string
  password: string
  email: string
  telephone: string
  cellphone: string
  taxid: string
  birthdate: string
  address_street: string
  address_number: string
  complement: string
  zip: string
  district: string
  city: string
  state: string
  country: string
  role: string
  status: string
  lgpd_check: string
  avatar: string
  currentPlan: String
  avatarColor?: ThemeColor
}
