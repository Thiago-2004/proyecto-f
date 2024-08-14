import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import NavbarCustom from './componentes/narbar/narbar';  // Importa el componente de la barra de navegación

function App() {
  return (
    <Router>
      <div className='contenedor'>
        <NavbarCustom /> 
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/Fumitecno" />} />
            {/* <Route path='/argentum' element={<Seccion />} />
            <Route path='/productos' element={<Productos />} />
            <Route path='/contacto' element={<ContactForm />} />
            <Route path='/carrito' element={<Carrito />} /> */}
           
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
