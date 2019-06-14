import { put, call, takeEvery } from 'redux-saga/effects'

import { userRequestSuccess, USER_FETCH_REQUEST } from '../../action/todo/todoAction'

// import Api from ''


// 处理返回的参数
function delUser(result) {
  return result
}

function* fetchUser(action) {
  try {
    // 调用api请求参数
    // const result = yield call(Api.fetch, action.payload.userId)
    const result = {
      userName: 'saga'
    }
    // 拿到参数触发action(put就是包装的dispatch)
    yield put(userRequestSuccess(delUser(result)))
  } catch (error) {
    yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

function* todoSaga() {
  // 每次触发此action会调用fetchUser函数处理
  yield takeEvery(USER_FETCH_REQUEST, fetchUser)
}

export default todoSaga

