//config React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//css
import './App.css'
//pages;
import Home from './pages/Home/Home';
import About from './pages/About/About';
import EspeciariasPedras from './pages/EspeciariasPedras/EspeciariasPedras';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/especiarias' element={<EspeciariasPedras/>}/>
              <Route path='/contacts' element={<Contact/>}/>
          </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
