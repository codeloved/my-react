import { 
  VisibilityFilters,
  ADD_TODO,
  TOGGER_TODO,
  SET_VISIBILITY_FILTER
 } from '../../action/todo/todoAction'

const initState = {
  visibilityFilters: VisibilityFilters.SHOW_ALL,
  todo: []
}

export const todo = (state = initState, action) => {
  switch(action.type) {
    case SET_VISIBILITY_FILTER: 
      return {
        ...state,
        visibilityFilters: action.payload.filter
      }
    case ADD_TODO: 
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            text: action.payload.text,
            complete: action.payload.complete
          }
        ]
      }
    default: 
      return state 
  }
}

