export const validLogin = {
  email: 'user@user.com',
  password: 'secret_user'
}

export const incorrectEmail = {
  email: 'adm@user.com',
  password: 'secret_user'
}
export const incorrectPassword = {
  email: 'user@user.com',
  password: 'secret_uset'
}
export const invalidEmailFormat = {
  email: 'user.com',
  password: 'secret_user'
}
export const invalidPasswordFormat = {
  email: 'user@user.com',
  password: 'secre'
}
export const emptyEmail = {
  email: '',
  password: 'secret_user'
}
export const emptyPassword = {
  email: 'user@user.com',
  password: ''
}
export const userModel = {
  id: 2,
  username: 'User',
  role: 'user',
  email: 'user@user.com',
  password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO'
}
export const tokenMock = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTY3OTg3MzEzNywiZXhwIjoxNjgwNDc3OTM3fQ.IpyLF941f1wXqqqtZgt35yahKh2WhKD_S9TpGFk8Wdk'
}