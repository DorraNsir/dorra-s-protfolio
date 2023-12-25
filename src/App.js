import './App.css';
import Skills from './components/Skills/Skills';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Header from './components/header/Header'; 
import Home from './components/home/Home';
import Qualification from './components/qualification/Qualification';
import Services from './components/services/Services';


function App() {
  return (
<div>
  <Header/>
  
  <main className='main'>
    <Home/>
    <About/>
    <Skills/>
    <Services/>
    <Qualification/>
    <Contact/>
    
  </main>
  
</div>
  );
}
export default App;
