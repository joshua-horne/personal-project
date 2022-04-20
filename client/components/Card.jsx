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
      <img src={card.image} alt="picture of your card" />
      <h1>Your Card: The {card.value} of {card.suit}</h1>
      <h2>Card Effect: {cardEffect}</h2>
    </div>
  )
}

export default Card