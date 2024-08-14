import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import NavbarCustom from './componentes/narbar/narbar';  
import Seccion from './componentes/Seccion/Seccion';
import Footer from './componentes/Footer/footer';
import ContactForm from './componentes/Contacto/Contacto';
import Servicios from './componentes/Servicios/Servicios.jsx';

function App() {
  return (
    <Router>
      <div className='contenedor'>
        <NavbarCustom /> 
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/Fumitecno" />} />
            <Route path='/Fumitecno' element={<Seccion />} />
            <Route path='/Servicios' element={<Servicios />} />
            <Route path='/Contacto' element={<ContactForm />} />
           
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
