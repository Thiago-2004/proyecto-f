import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import NavbarCustom from './componentes/narbar/narbar';  
import Seccion from './componentes/Seccion/Seccion';
import Footer from './componentes/Footer/footer';

function App() {
  return (
    <Router>
      <div className='contenedor'>
        <NavbarCustom /> 
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/Fumitecno" />} />
            <Route path='/Fumitecno' element={<Seccion />} />
           
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
