import React, { useState, useEffect } from 'react'

import ErrorMessage from './ErrorMessage'
import NewGame from './NewGame'
import Game from './Game'

function App() {

  return (
    <>
    <h1>Kings Cup</h1>
    <ErrorMessage />
    <NewGame />
    <Game />
    </>
  )
}

export default App
