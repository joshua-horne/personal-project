import request from 'superagent'

export const REQUEST_DECK = 'REQUEST_DECK'
export const RECEIVE_DECK = 'RECEIVE_DECK'
export const REQUEST_CARD = 'REQUEST_CARD'
export const RECEIVE_CARD = 'RECEIVE_CARD'
export const PROCESS_EFFECT = 'PROCESS_EFFECT'
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

export function processEffect() {
  return {
    type: PROCESS_EFFECT,
  }
}

export function receiveDeck(deck) {
  return {
    type: RECEIVE_DECK,
    deck: deck.deck_id,
  }
}

export function receiveCard(drawn) {
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

export function fetchEffect(value) {
  switch (value) {
    case 'ACE':
      return 'Waterfall'
    case '2':
      return 'You'
    case '3':
      return 'Me'
    case '4':
      return 'Ladies'
    case '5':
      return 'House Rules'
    case '6':
      return 'Lads'
    case '7':
      return 'Heaven'
    case '8':
      return 'Mate'
    case '9':
      return 'Rhyme'
    case '10':
      return 'Categories'
    case 'JACK':
      return 'New Rule'
    case 'QUEEN':
      return 'Question Master'
    case 'KING':
      return 'CONTRIBUTE TO THE KINGS CUP!'
    default:
      return 'Not Found'
  }
}
