import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/certs" element={<Certs />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
