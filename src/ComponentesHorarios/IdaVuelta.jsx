import React, { useState } from 'react';
import '../Estilos/horarios.css';
import { FaArrowRight } from "react-icons/fa";


const IdaVuelta = ( { nombre }) => {

    return (
        <div className='container-idavuelta'>
            <div className='texto-boton-idavuelta'><p>{nombre}</p></div>
            <FaArrowRight className='icono-flecha'/>

        </div>
    )
}

export default IdaVuelta;