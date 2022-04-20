import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { drawCard } from '../actions'


function Game(props) {
  const card = useSelector((state) => state.card)
  const dispatch = useDispatch() 
  const deckID = props.deckID

  return (
    <div>
      <button onClick={() => dispatch(drawCard(deckID))}>
        Draw Card
      </button>
      <h1>Your Card: {card}</h1>
    </div>
  )
}

export default Game