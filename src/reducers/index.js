import { combineReducers } from 'redux'

import counter from './counter'

import film from './film'

export default combineReducers({
  counter,
  film
})