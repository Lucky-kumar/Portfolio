import React from 'react'
import Skills from '../Skills/Skills';
import AboutH from './AboutH';
import Skillsphere from './Skillsphere';
import './styles/About.css'
import Projects from './../Projects/Projects';

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
      <Skills/>
      <Projects/>

    </div>
  )
}

export default About