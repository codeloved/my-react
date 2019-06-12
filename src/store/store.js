import { createStore } from 'redux'

import indexReducer from '../reducer/index'

const store = createStore(indexReducer)

export default store
