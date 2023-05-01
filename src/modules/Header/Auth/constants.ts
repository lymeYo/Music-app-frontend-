export type TauthType = 'login' | 'registration'

export type TloginData = {
  username: string
  password: string
}

export type TregistrationData = {
  username: string
  password: string
}

export type TtokenData = {
  token: string
}
