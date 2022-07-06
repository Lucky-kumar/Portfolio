import React from 'react'
import AboutH from './AboutH';
import Skillsphere from './Skillsphere';
import './styles/About.css'

const About = () => {
  return (
    <div className='about_html'>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <AboutH />
      <div className='glass'>
        My name is Lucky kumar. I am a passionate full stack developer.
      </div>
      <Skillsphere />

    </div>
  )
}

export default About