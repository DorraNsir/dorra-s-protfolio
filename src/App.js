import './App.css';
import Skills from './components/Skills/Skills';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'; 
import Home from './components/home/Home';
import Qualification from './components/qualification/Qualification';
// import Services from './components/services/Services';
import Scrollup from './components/scrollup/Scrollup';
import Work from './components/work/Work';


function App() {
  return (
<div>
  <Header/>
  
  <main className='main'>
    <Home/>
    <About/>
    <Skills/>
    {/* <Services/> */}
    <Work/>
    <Qualification/>
    <Contact/>
  </main>
  <Scrollup/>
  <Footer/>
</div>
  );
}
export default App;
