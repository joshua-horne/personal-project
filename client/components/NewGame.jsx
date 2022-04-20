import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { firstCard } from '../actions'

function NewGame() {
  const running = useSelector((state) => state.running)

  const dispatch = useDispatch()

  return !running ? (
    <div>
      <h2>Enter Player Names IN DEVELOPMENT</h2>
      <button onClick={() => dispatch(firstCard())}>
        New Game
      </button>
    </div>
  ) : null
}

export default NewGame