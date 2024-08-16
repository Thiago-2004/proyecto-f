        import React, { useState } from 'react';
import './Nosotros.css'; // Asegúrate de tener una hoja de estilos para el componente.

function Nosotros() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="empresa-container">
      <div className="empresa">
        <h3><b>EMPRESA</b></h3>
        <p>
          FUMITECNO ingresa al mercado en el año 2015. <br />
          En estos años de trabajo hemos sumado valiosa experiencia que ha generado una empresa sólida y confiable en
          todas sus operaciones. <br />
          Somos la 2da generación. Fumitecno es una empresa compuesta principalmente por gente joven con gran vocación
          de servicio para brindar soluciones a nuestros clientes.
        </p>
      </div>

      <h3 className="valores">Valores:</h3>

      <div className="accordion">
        <div className="accordion-item">
          <h2 className="accordion-header" onClick={() => toggleSection(1)}>
            <button className={`accordion-button ${activeSection === 1 ? '' : 'collapsed'}`}>
              Compromiso
            </button>
          </h2>
          <div className={`accordion-collapse collapse ${activeSection === 1 ? 'show' : ''}`}>
            <div className="accordion-body">
              Compromiso con nuestros clientes, priorizando la satisfacción de sus demandas.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" onClick={() => toggleSection(2)}>
            <button className={`accordion-button ${activeSection === 2 ? '' : 'collapsed'}`}>
              Respeto
            </button>
          </h2>
          <div className={`accordion-collapse collapse ${activeSection === 2 ? 'show' : ''}`}>
            <div className="accordion-body">
              Respeto en el trato de personal, con liderazgo y motivación.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" onClick={() => toggleSection(3)}>
            <button className={`accordion-button ${activeSection === 3 ? '' : 'collapsed'}`}>
              Trabajo en Equipo
            </button>
          </h2>
          <div className={`accordion-collapse collapse ${activeSection === 3 ? 'show' : ''}`}>
            <div className="accordion-body">
              Colaboración y trabajo en equipo, compartiendo nuevas ideas, soluciones y experiencias.
            </div>
          </div>
        </div>
        {/* Puedes agregar más elementos del acordeón para los otros valores. */}
      </div>

      <div className="vision">
      <h3><b>VISION DE EMPRESA</b></h3>
        <p>
          Ser una empresa líder en el mercado local, en el servicio de control de plagas, brindando la mayor calidad y
          efectividad en el servicio a un precio competitivo, que nos permita crecer y buscar una mejor calidad de
          vida para nuestros empleados.
        </p>
      </div>
    </div>
  );
}

export default Nosotros;
