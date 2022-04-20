import React, { useState, useEffect } from 'react'

import ErrorMessage from './ErrorMessage'
import LoadGame from './LoadGame'
import Loading from './Loading'
import Deck from './Deck'

function App() {

  return (
    <>
    <h1>Kings Cup</h1>
    <ErrorMessage />
    <LoadGame>
      <Loading />
    </LoadGame>
    <Deck />
    </>
  )
}

export default App
