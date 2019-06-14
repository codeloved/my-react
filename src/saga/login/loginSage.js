import { take, put, call, fork, cancel  } from 'redux-saga/effects'

import { loginSuccess, loginError, loginOut, LOGIN_REQUEST, LOGIN_OUT, LOGIN_ERROR } from '../../action/login/loginAction'

// import Api from ''

function* authorize(action) {
  // 会先进reducer中的LOGIN_REQUEST,才会进此里面,因为redux-saga是监听,不是阻断
  try {
    // const token = yield call(Api.authorize, action.payload)
    const token = 'token123456'
    yield put(loginSuccess({
      token,
      message: 'login success'
    }))
    // yield call(Api.storeItem, {token})
    return token

  } catch (error) {
    yield put(loginError({
      token: '',
      message: 'login error'
    }))
  } finally {
    if (yield cancelled()) {
      // 请求被取消时调用,可以在此处put一些状态,比如说loading状态
    }
  }
}

function* loginSaga() {
  // 此函数是普通函数,必须要使用 while(true)才能实现无限循环
  // take会等待相应的action,dispatch之后,才会执行下一步
  // 执行原理: 先等待LOGIN_REQUEST,然后等待LOGIN_OUT,登出后,由于是无限循环,又会循环到最上面,等待LOGIN_REQUEST
  // 参见redux-saga 无阻塞调用
  while(true) {
    // 等待LOGIN_REQUEST请求
    const actionData = yield take(LOGIN_REQUEST)
    // fork和call是一样的,
    const task = yield fork(authorize, actionData)
    // 等待[LOGIN_OUT, LOGIN_ERROR]的其中一个发生,就会继续执行
    const action = yield take([LOGIN_OUT, LOGIN_ERROR])
    if (action.type === LOGIN_OUT) {
      yield cancel(task)
      // yield call(Api.clearItem('token'))
    }
  }
}

export default loginSaga