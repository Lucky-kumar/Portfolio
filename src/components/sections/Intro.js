import React from 'react'
import Greet from '../Greet'

import './styles/Intro.css'

const Intro = () => {
  return (
    <div id="body_intro">
      <div className="container_fluid">
        <div className="background">
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <h1 className="header_content">Lucky Kumar</h1>
          <Greet/>
        </div>
      </div>

    </div>
  )
}

export default Intro