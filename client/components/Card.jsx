import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { fetchEffect } from '../actions'

function Card() {
  const [cardEffect, setEffect] = useState('')
  const card = useSelector((state) => state.card)

  useEffect(() => {
    setEffect(fetchEffect(card.value))    
  }
  ,[card])

  return (
    <div>
      <h1>Your turn (PLAYER NAME)</h1>
      <img src={card.image} alt="picture of your card" />
      <h1>Your Card: The {card.value} of {card.suit}</h1>
      <h2>Card Effect: {cardEffect} (more detailed explanation on hover?)</h2>
      <h3>Remaining Cards: {card.remaining}</h3>
      <h3>Remaining Kings: King Counter (IN DEVELOPMENT)</h3>
      <h3>Game End Condition and Replay Function (IN DEVELOPMENT)</h3>
    </div>
  )
}

export default Card