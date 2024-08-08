import React, { useState, useEffect } from 'react';
import '../Estilos/salidallegada.css';


export const Puntos = ( { listaDeLocalidadesDesplegada , nombre , puntoElegido , localidadOrigen , localidadDestino , clickeoDeCampo})  => {

    const [textoCampoLocalidad , setTextoCampoLocalidad] = useState('Elegí una localidad');
    const [origenOdestino , setOrigenOdestino] = useState();

    const clickeadoEnMenuDeLocalidades = () => {
        return (
                setTextoCampoLocalidad('Elegí una localidad'),
                listaDeLocalidadesDesplegada(true),
                puntoElegido(nombre),
                setOrigenOdestino(nombre)
            );
    }

    useEffect(() => {
        
        origenOdestino === 'origen' && setTextoCampoLocalidad(localidadOrigen);
        origenOdestino === 'destino' && setTextoCampoLocalidad(localidadDestino);
    },[localidadOrigen , localidadDestino , origenOdestino , campoClickeado])

    return (
        <div className="puntos"> 
            <p className="puntosalida-texto">{nombre}  :</p>
            <span 
            className='container-opcion-seleccionada'
            onClick={clickeadoEnMenuDeLocalidades}>{textoCampoLocalidad}</span>
        </div>
    )
}