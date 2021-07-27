import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'

export const reducers = (history: any) =>
  combineReducers({
    router: connectRouter(history),
  })

export interface State {}
