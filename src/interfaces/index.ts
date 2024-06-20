export interface User {
  id: number,
  name: string,
  nick: string,
  email: string,
  password: string,
}

export interface ErrorMessage {
  name: string,
  message: string,
}