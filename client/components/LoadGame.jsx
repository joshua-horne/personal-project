import React from 'react'
import { useDispatch } from 'react-redux'

import { fetchDeck } from '../actions'

function LoadGame() {

  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(fetchDeck())}>
        New Deck
      </button>
    </div>
  )
}

export default LoadGame