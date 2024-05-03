import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './pages/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Designs from './pages/Designs';
import Certs from './pages/Certs';
import Contacts from './pages/Contacts';

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Designs />
      <Certs />
      <Contacts />
    </BrowserRouter>
  )
}

export default App
