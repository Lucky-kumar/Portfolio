import './App.css';
import Intro from './components/sections/Intro/Intro';
import About from './components/sections/About/About';
import Contact from './components/sections/Contact/Contact';
import Projects from './components/sections/Projects/Projects';
import ProjectsH from './components/sections/Projects/ProjectsH';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Intro/>
      <About/>
      <ProjectsH/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
