import React from 'react'
import { useSelector } from 'react-redux'


function Card() {
  const card = useSelector((state) => state.card)
  
  return (
    <div>
      <img src={card.image} alt="picture of your card" />
      <h1>Your Card: The {card.value} of {card.suit}</h1>
      <h2>Card Effect: </h2>
    </div>
  )
}

export default Card