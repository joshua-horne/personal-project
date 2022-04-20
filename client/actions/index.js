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

export function requestCard() {
  return {
    type: REQUEST_CARD,
  }
}

export function receiveDeck(deck) {
  return {
    type: RECEIVE_DECK,
    deck: deck.deck_id,
  }
}

export function receiveCard(drawn) {
  //scenario for multiple drawn cards?
  return {
    type: RECEIVE_CARD,
    payload: {
      deck: drawn.deck_id,
      code: drawn.cards[0].code,
      image: drawn.cards[0].image,
      value: drawn.cards[0].value,
      suit: drawn.cards[0].suit,
      remaining: drawn.remaining,
    },
  }
}

export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage,
  }
}

export function firstCard() {
  return (dispatch) => {
    dispatch(requestCard())
    dispatch(requestDeck())
    return request
      .get(`/api/v1/new`)
      .then((res) => {
        dispatch(receiveDeck(res.body))
        dispatch(receiveCard(res.body))
        return null
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function drawCard(deckID) {
  return (dispatch) => {
    dispatch(requestCard())
    return request
      .get(`/api/v1/draw/${deckID}`)
      .then((res) => {
        dispatch(receiveCard(res.body))
        return null
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
