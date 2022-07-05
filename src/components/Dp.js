import React from 'react'
import './styles/Dp.css'
import image from '../utils/dp.jpeg'

const Dp = () => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <div class="photo">
    <img src={image} alt="lucky kumar" />
  <div class="glow-wrap">
    <i class="glow"></i>
  </div>
</div>
    )
}

export default Dp