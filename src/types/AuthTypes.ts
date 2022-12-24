export interface ILogin {
  email: string
  password: string
}
export interface IResetPassword {
  email: string
  code: string
}
export interface IRegistration {
  email: string
  password: string
  password_copy: string
}
