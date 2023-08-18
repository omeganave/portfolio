import React from 'react'
import { useLocation } from 'react-router-dom'

const Work = () => {
    const location = useLocation();
    const { name, text, imagePath, alt } = location.state;
  return (
    <div>{name}</div>
  )
}

export default Work