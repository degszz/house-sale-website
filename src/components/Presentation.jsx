import React from 'react';
import KeyAnimation from './KeyAnimation';
import imagenes from '../assets/imagenes';

const Presentation = () => {
    return (
        <div className="presentation-container">
            <div className="content">
                <h1>
                    Casas en Venta en Buenos Aires.
                </h1>
                <p>
                    Si estás proyectando tu vivienda familiar o próxima inversión, en Coppola & Pavese podrás encontrar opciones EN VENTA o EN ALQUILER, y un equipo de profesionales para asesorarte.
                </p>
                <a href="#CONTACTO"><img src={imagenes.flecha} style={{ backgroundColor: '#DA3C57', padding: '1em', borderRadius: '2em' }} /></a>
            </div>
            <KeyAnimation />
        </div>
    );
};

export default Presentation;
