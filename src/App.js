import './App.css';
import Skills from './components/Skills/Skills';
import About from './components/about/About';
import Header from './components/header/Header'; 
import Home from './components/home/Home';
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
    
  </main>
  
</div>
  );
}
export default App;
