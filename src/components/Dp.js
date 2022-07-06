import React from 'react'
import './styles/Dp.css'
import image from '../utils/dp.jpeg'

const Dp = () => {
  return (
    <div className="photo">
    <img src={image} alt="lucky kumar" />
  <div className="glow-wrap">
    <i className="glow"></i>
  </div>
</div>
    )
}

export default Dp