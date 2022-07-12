import './App.css';
import Intro from './components/sections/Intro/Intro';
import About from './components/sections/About/About';
import Contact from './components/sections/Contact/Contact';
import Projects from './components/sections/Projects/Projects';
import ProjectsH from './components/sections/Projects/ProjectsH';
import Navbar from './components/Navbar';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='container'>
        <Intro />
        {/* <About /> */}
        <ProjectsH />
        <Projects />
        {/* <Contact /> */}
      <div className='nbr'>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
