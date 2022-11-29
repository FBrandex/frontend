export type ErrCallbackType = (err: { [key: string]: string }) => void

export type LoginParams = {
  email: string
  password: string
}

export type RegisterParams = {
  email: string
  username: string
  password: string
}

export type UserDataType = {
  id: number
  clientCod: number
  role: string
  email: string
  fullName: string
  username: string
  telephone: string
  cellphone: string
  taxId: number
  brithdate: string
  addressStreet: string
  addressNumber: string
  complement: string
  zip: string
  district: string
  city: string
  state: string
  contry: string
  status: string // definir status
  lgpdCheck: boolean
  avatar?: string | null
}

export type AuthValuesType = {
  loading: boolean
  setLoading: (value: boolean) => void
  logout: () => void
  isInitialized: boolean
  user: UserDataType | null
  setUser: (value: UserDataType | null) => void
  setIsInitialized: (value: boolean) => void
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => void
  register: (params: RegisterParams, errorCallback?: ErrCallbackType) => void
}
