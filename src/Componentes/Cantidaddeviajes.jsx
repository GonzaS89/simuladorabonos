import React from 'react';
import '../Estilos/salidallegada.css';


export const Cantidaddeviajes = ( ) => {
    return (
        <div className="container-cantidaddeviajes">
            <p className="texto-cantidaddeviajes">Cantidad de viajes</p>
            <input 
            type="number" min={8} max={50}
            className='inputViajes'/>
        </div>
    )
}