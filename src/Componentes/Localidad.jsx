import React from 'react';

const Localidad = ( props ) => {

    const enviarLocalidad = () => {
        return (props.enviarLocalidad(props.nombre))
    }
    return (

        <div 
        className='contenedor-localidad'
        onClick={()=>enviarLocalidad(props.chlidren)}>
            
            <p className='localidad-nombre'>{props.nombre}</p>
            <span className='localidad-flecha'>»</span>
        </div>

    )
}

export default Localidad;