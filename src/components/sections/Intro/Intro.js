import React from 'react'
import Greet from './Greet'
import 'animate.css';
import './styles/Intro.css'
import Title from './Title';
import Dp from './Dp';
import Name from './Name';

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
          <Greet/>
          <h1 className="im animate__animated animate__fadeIn">I'm</h1>
          <h1 className="name animate__animated animate__zoomInDown"><Name/></h1> 
           <Dp/>
          <Title/>
        </div>
      </div>

    </div>
  )
}

export default Intro