import request from 'superagent'

export const REQUEST_DECK = 'REQUEST_DECK'
export const RECEIVE_DECK = 'RECEIVE_DECK'
export const REQUEST_CARD = 'REQUEST_CARD'
export const RECEIVE_CARD = 'RECEIVE_CARD'
export const SHOW_ERROR = 'SHOW_ERROR'

export function requestDeck() {
  return {
    type: REQUEST_DECK,
  }
}

export function receiveDeck(response) {
  return {
    type: RECEIVE_DECK,
    deck: response.deck_id,
  }
}

export function requestCard() {
  return {
    type: REQUEST_CARD,
  }
}

export function receiveCard(drawn) {
  return {
    type: RECEIVE_CARD,
    deck: drawn.deck_id,
    card_code: drawn.cards[0].code,
    card_image: drawn.cards[0].image,
    card_value: drawn.cards[0].value,
    card_suit: drawn.cards[0].suit,
    remaining: drawn.remaining,
  }
}

export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage,
  }
}

export function fetchDeck() {
  return (dispatch) => {
    dispatch(requestDeck())
    return request
      .get(`/api/v1/new`)
      .then((res) => {
        dispatch(receiveDeck(res.body))
        return null
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

// Create draw card function
export function drawCard(deckID) {
  return (dispatch) => {
    //create action for request card ?done?
    dispatch(requestCard())
    return (
      request
        //create api get for draw card ?done?
        .get(`/api/v1/draw/${deckID}`)
        .then((res) => {
          //create receive card action ?done?
          dispatch(receiveCard(res.body))
          return null
        })
        .catch((err) => {
          dispatch(showError(err.message))
        })
    )
  }
}
