import React from 'react';

const Localidad = ( props ) => {
    return (

        <div 
        className='contenedor-localidad'>
            <p className='localidad-nombre'>{props.nombre}</p>
            <span className='localidad-flecha'>»</span>
        </div>

    )
}

export default Localidad;