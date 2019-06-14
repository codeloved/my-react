import { LOGIN_ERROR, LOGIN_OUT, LOGIN_SUCCESS, LOGIN_REQUEST } from '../../action/login/loginAction'

const initState = {
  isLoginPending: false, // 控制接口loading
  token: '', // 登录的token
  message: '' // 登录成功或者失败的消息
}

export const login = (state = initState, action) => {
  switch(action.type) {
    case LOGIN_REQUEST: 
      return {
        ...state,
        isLoginPending: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        message: action.payload.message,
        isLoginPending: false
      }
    case LOGIN_OUT: 
      return {
        ...state,
        token: action.payload.token,
        message: action.payload.message,
        isLoginPending: false
      }
    case LOGIN_ERROR: 
      return {
        ...state,
        token: action.payload.token,
        message: action.payload.message,
        isLoginPending: false
      }
    default: 
     return state
  }
}