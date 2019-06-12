import { combineReducers } from 'redux'

import { todo } from './todo/todoReducer'

// combineReducers会创建一个对象,对象的key值就是各个小的reducer,当有action dispatch时,会遍历每一个小的reducer,寻找对应的case action更新,所以action要加文件名,不能重复
// 否则会更新多个小的action,集体combineReducers可以查看redux文档基础reducer的实现
const indexReducer = combineReducers({
  todo
})

export default indexReducer