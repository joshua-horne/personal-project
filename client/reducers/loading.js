import { SHOW_ERROR, REQUEST_DECK, RECEIVE_DECK } from '../actions'

function waiting(state = false, action) {
  switch (action.type) {
    case REQUEST_DECK:
      return true

    case RECEIVE_DECK:
      return false

    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default waiting
