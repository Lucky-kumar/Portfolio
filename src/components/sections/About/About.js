import React from 'react'
import Skills from '../Skills/Skills';
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
      <div className='about_text'>
        My name is Lucky kumar. I am a passionate full stack developer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quod, illum aut cum esse et explicabo corporis expedita error voluptatibus ipsa impedit sint incidunt fugiat! Quis quasi corrupti facilis perferendis tempore assumenda vitae consectetur, repellendus fuga provident ipsum iste et! Numquam laudantium accusamus, quasi vero culpa esse facilis ea molestias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi officia ducimus, distinctio voluptates incidunt vero hic error, illum autem deserunt temporibus aliquid iure quae ut voluptas dicta sunt aperiam laborum sed! Eos, aut repudiandae ut harum asperiores voluptas et iste autem exercitationem, odio officiis illum magnam id quod non! Tenetur.
      </div>
      <Skillsphere />
      <Skills/>
    </div>
  )
}

export default About