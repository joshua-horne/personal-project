import { SHOW_ERROR, RECEIVE_CARD } from '../actions'

function running(state = false, action) {
  switch (action.type) {
    case RECEIVE_CARD:
      return true

    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default running
