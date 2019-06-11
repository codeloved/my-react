// 导出常量,为了防止重复,加上文件名结尾,不同action中常量重复,会导致reducer进入错误的分支,导致store错误
export const ADD_TODO = 'ADD_TODO_todoAction'
export const TOGGER_TODO = 'TOGGER_TODO_todoAction'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER_todoAction'