import React , { useState }from 'react';


export const Localidad = ( { nombreLocalidad , localidadObtenida }) => {

    const clickearLocalidad = ( ) => {
        return (localidadObtenida(nombreLocalidad))

    }
    return (
        <div 
        className="container-localidad"
        onClick={clickearLocalidad}>
            <p className="nombre-localidad">{nombreLocalidad}</p>
        </div>
    )
}