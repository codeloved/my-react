// 导出常量,为了防止重复,加上文件名结尾,不同action中常量重复,会导致reducer进入错误的分支,导致store错误
export const ADD_TODO = 'ADD_TODO_todoAction'
export const TOGGER_TODO = 'TOGGER_TODO_todoAction'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER_todoAction'
export const USER_FETCH_REQUEST = 'USER_FETCH_REQUEST_todoAction'
export const USER_REQUEST_SUCCESS = 'USER_REQUEST_SUCCESS_todoAction'

// 其他常量
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// action 创建函数

export const addTodo =  (payload) => ({
  type: ADD_TODO,
  payload
})

export const toggerTodo = (payload) => ({
  type: TOGGER_TODO,
  payload
})

export const setVisibilityFilter = (payload) => ({
  type: SET_VISIBILITY_FILTER,
  payload
})

export const userFetchRequest = (payload) => ({
  type: USER_FETCH_REQUEST,
  payload
})

export const userRequestSuccess = (payload) => ({
  type: USER_REQUEST_SUCCESS,
  payload
})