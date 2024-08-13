import React from 'react';
import '../Estilos/salidallegada.css';

const Cantidaddeviajes = ( { viajesIngresados }) => {

    const enviarViajesIngresados = e => {
        return (
            e.target.value !== '' ? 
            viajesIngresados(parseInt(e.target.value)) :
            viajesIngresados(0)
        )
    }

    return (
        <div className="container-cantidaddeviajes">
            <p className="texto-cantidaddeviajes">Cantidad de viajes</p>
            <input 
            type="number" min={8} max={50}
            className='inputViajes'
            onChange={enviarViajesIngresados}/>
        </div>
    )
}

export default Cantidaddeviajes