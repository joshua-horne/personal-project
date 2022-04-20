import { combineReducers } from 'redux'

import errorMessage from './errorMessage'
import loading from './loading'
import deck from './deck'
import card from './card'

export default combineReducers({
  errorMessage,
  loading,
  deck,
  card,
})
