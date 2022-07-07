import './App.css';
import Intro from './components/sections/Intro/Intro';
import About from './components/sections/About/About';
import Contact from './components/sections/Contact/Contact';
import ProjectsBg from './components/sections/Projects/ProjectsBg';

function App() {
  return (
    <div className='container'>
      <Intro/>
      <About/>
      <ProjectsBg/>
      <Contact/>
    </div>
  );
}

export default App;
