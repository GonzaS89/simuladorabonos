import React, { useState, useEffect } from 'react';
import '../Estilos/salidallegada.css';


export const Puntos = ( { listaDeLocalidadesDesplegada , nombre , puntoElegido , localidadOrigen , localidadDestino })  => {

    const [textoCampoLocalidad , setTextoCampoLocalidad] = useState('Elegí una localidad');

    const [origenOdestino , setOrigenOdestino] = useState();

    const clickeadoEnMenuDeLocalidades = () => {
        return (
                listaDeLocalidadesDesplegada(true),
                puntoElegido(nombre),
                setOrigenOdestino(nombre)
            );
    }

    useEffect(() => {
        origenOdestino === 'origen' && setTextoCampoLocalidad(localidadOrigen);
        origenOdestino === 'destino' && setTextoCampoLocalidad(localidadDestino);
    },[localidadOrigen , localidadDestino , origenOdestino])

    return (
        <div className="puntos"> 
            <p className="puntosalida-texto">{nombre}  :</p>
            <span 
            className='container-opcion-seleccionada'
            onClick={clickeadoEnMenuDeLocalidades}>{textoCampoLocalidad}</span>
        </div>
    )
}