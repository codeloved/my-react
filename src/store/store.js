import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleWare from 'redux-saga'

import indexSage from '../saga/index'

const sagaMiddleware = createSagaMiddleWare()

import indexReducer from '../reducer/index'

const store = createStore(indexReducer, applyMiddleware(sagaMiddleware))

// 运行saga
for (const saga in indexSage) {
  if (indexSage.hasOwnProperty(saga)) {
    sagaMiddleware.run(indexSage[saga])
  }
}

// 引用后会执行整个模块,所以sagaMiddleware.run(mySaga)会执行
export default store
