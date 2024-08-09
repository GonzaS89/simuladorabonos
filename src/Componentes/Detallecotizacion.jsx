import React from 'react';
import '../Estilos/resultadoscotizador.css';

export const Detallecotizacion = ( { viajesIngresados , localidadOrigen , localidadDestino , precioAbono } ) => {

    const colocarPuntoDeMillar = valor => {
        return (
        valor > 1000 ? 
        (valor / 1000).toFixed(3) : 
        valor
        )
    }

    return (
            <div 
            className='container-detalle-precio'>
                <p className={viajesIngresados !== 0 ? 'detalle' : 'detalle oculto'}>{viajesIngresados === null ? '' : `${viajesIngresados} viajes de ${localidadOrigen} hasta ${localidadDestino}`}</p>
                <p className={precioAbono !== 0 ? 'precio' : 'precio oculto'}>$ {colocarPuntoDeMillar(precioAbono)}</p>
        </div>
    )
}
