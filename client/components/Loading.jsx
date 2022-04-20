import React from 'react'
import { useSelector } from 'react-redux'

function Loading() {
  const showIndicator = useSelector((state) => state.waiting)

  return showIndicator ? (
    <img className="wait-indicator" src="/animated-circle.gif" />
  ) : null
}

export default Loading