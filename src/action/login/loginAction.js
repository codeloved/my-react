export const LOGIN_REQUEST = 'LOGIN_REQUEST_loginAction'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS_loginAction'
export const LOGIN_ERROR = 'LOGIN_ERROR_loginAction'
export const LOGIN_OUT = 'LOGIN_OUT_loginAction'

export const loginRequest = (payload) => ({
  type: LOGIN_REQUEST,
  payload
})

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload
})

export const loginError = (payload) => ({
  type: LOGIN_ERROR,
  payload
})

export const loginOut = (payload) => ({
  type: LOGIN_OUT,
  payload
})

