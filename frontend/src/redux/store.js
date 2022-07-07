import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import persDataReducer from './persDataReducer'

const reducers = combineReducers({
  persData: persDataReducer,
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleWare)))

export default store