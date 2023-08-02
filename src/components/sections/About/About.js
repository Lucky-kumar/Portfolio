import React from 'react'
import Skills from '../Skills/Skills';
import AboutH from './AboutH';
import Skillsphere from './Skillsphere';
import './styles/About.css'
import { useMediaQuery } from 'react-responsive';


const About = () => {

  const isTablet = useMediaQuery({ minWidth: 900, maxWidth: 1500 })
  const isMobile = useMediaQuery({ maxWidth: 900 })
  let rad = 300

  if (isTablet) {
    rad = 400
  }
  else if (isMobile) {
    rad = 150
  }


  return (
    <div id="about" className='about_html'>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div data-aos="fade-down">
        <AboutH />
      </div>
      <div className='about_text' >
        <div data-aos="fade-up">
          I am currently pre-final year student at Indian Institute of Information Technology, Gwalior. I am a passionate and enthusiastic developer who is in a lovely relationship with coding. I have extensive hands on experience in web developement. <br /> <br />
        </div>

        <div data-aos="fade-up">
          I have worked with HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Redux, Tailwind CSS and many other technologies. For backend, I have worked with Nodejs, Express, MongoDB, MySQL and Firebase. <br /> <br />
        </div>

        <div data-aos="fade-up">
        I am working as a Front-End Intern at MapZot.AI for over 10 months, I honed my skills in creating intuitive user interfaces and developing responsive web pages. During this time, I collaborated effectively with cross-functional teams, gaining a deeper understanding of the importance of seamless integration and user experience.

           <br /> <br />
        </div>

        <div data-aos="fade-up">
          I am always interested to have new experiences, meet new people and learn new technologies, so feel free to reach out to me.
        </div>
      </div>
      <div data-aos="fade-left">
        <Skillsphere rad={rad}  />
      </div>

      <div className='skills_box' >
        <Skills />
      </div>
    </div>
  )
}

export default About