import './App.css';
import Section from './components/blok/Section';
import Header from './components/header/Header';
import About from './components/about/About';
import Servis from './components/servis/Servis';
import Covid from './components/covid/Covid';
import Articl from './components/articl/Articl';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div>
      <Header/> 
      <Section/>
      <About/>
      <Servis/>
      <Covid/>
      <Articl/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App





