import './App.css';
import Intro from './components/sections/Intro/Intro';
import About from './components/sections/About/About';
import Contact from './components/sections/Contact/Contact';

function App() {
  return (
    <div className='container'>
      <Intro/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
